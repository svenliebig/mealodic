import type { Request, Response, NextFunction } from "express";
import type { AuthUser } from "@mealodic/shared";
import { AppRole } from "@mealodic/shared";
import type { KeycloakClient } from "../lib/keycloak.js";

declare global {
  namespace Express {
    interface Request {
      user?: AuthUser;
    }
  }
}

function extractBearerToken(req: Request): string | null {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    return null;
  }
  return header.slice(7);
}

/**
 * Middleware that validates JWT tokens from the Authorization header.
 * On success, populates `req.user` with the authenticated user data.
 */
export function authenticate(keycloak: KeycloakClient) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = extractBearerToken(req);

    if (!token) {
      res.status(401).json({ error: "Missing or invalid authorization header" });
      return;
    }

    try {
      const claims = await keycloak.verifyToken(token);
      req.user = keycloak.extractUser(claims);
      next();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Token validation failed";
      res.status(401).json({ error: "Invalid token", details: message });
    }
  };
}

/**
 * Middleware that checks if the authenticated user has at least one
 * of the specified roles. Must be used after `authenticate`.
 */
export function requireRole(...roles: AppRole[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      res.status(401).json({ error: "Not authenticated" });
      return;
    }

    const hasRole = roles.some((role) => req.user!.roles.includes(role));
    if (!hasRole) {
      res.status(403).json({ error: "Insufficient permissions" });
      return;
    }

    next();
  };
}

/**
 * Convenience middleware requiring admin role.
 */
export function requireAdmin() {
  return requireRole(AppRole.Admin);
}
