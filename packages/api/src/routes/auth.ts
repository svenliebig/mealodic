import { Router, type Request, type Response } from "express";
import type { KeycloakClient } from "../lib/keycloak.js";
import { authenticate } from "../middleware/auth.js";

export function createAuthRouter(keycloak: KeycloakClient): Router {
  const router = Router();

  router.get("/discovery", (_req: Request, res: Response) => {
    res.json(keycloak.getDiscovery());
  });

  router.post("/refresh", async (req: Request, res: Response) => {
    const { refreshToken } = req.body as { refreshToken?: string };

    if (!refreshToken) {
      res.status(400).json({ error: "refreshToken is required" });
      return;
    }

    try {
      const tokens = await keycloak.refreshToken(refreshToken);
      res.json(tokens);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Token refresh failed";
      res.status(401).json({ error: message });
    }
  });

  router.post(
    "/logout",
    authenticate(keycloak),
    async (req: Request, res: Response) => {
      const { refreshToken } = req.body as { refreshToken?: string };

      if (refreshToken) {
        try {
          await keycloak.revokeToken(refreshToken);
        } catch {
          // Best-effort revocation — continue even if it fails
        }
      }

      res.status(204).send();
    },
  );

  router.get(
    "/me",
    authenticate(keycloak),
    (req: Request, res: Response) => {
      res.json(req.user);
    },
  );

  return router;
}
