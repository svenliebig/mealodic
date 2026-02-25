import { Router } from "express";
import { sendSuccess } from "../../helpers/response.js";

const router = Router();

/**
 * @openapi
 * /families:
 *   get:
 *     summary: List families
 *     description: Retrieve a list of family groups
 *     tags: [Families]
 *     responses:
 *       200:
 *         description: A list of families
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 */
router.get("/", (_req, res) => {
  sendSuccess(res, [], { page: 1, pageSize: 20, total: 0, totalPages: 0 });
});

/**
 * @openapi
 * /families/{id}:
 *   get:
 *     summary: Get a family
 *     description: Retrieve a single family group by ID
 *     tags: [Families]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The family
 *       404:
 *         description: Family not found
 */
router.get("/:id", (req, res) => {
  sendSuccess(res, { id: req.params["id"], placeholder: true });
});

export default router;
