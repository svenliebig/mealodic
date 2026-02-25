import { Router } from "express";
import { sendSuccess } from "../../helpers/response.js";

const router = Router();

/**
 * @openapi
 * /ingredients:
 *   get:
 *     summary: List ingredients
 *     description: Retrieve a paginated list of ingredients
 *     tags: [Ingredients]
 *     responses:
 *       200:
 *         description: A list of ingredients
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
 * /ingredients/{id}:
 *   get:
 *     summary: Get an ingredient
 *     description: Retrieve a single ingredient by ID
 *     tags: [Ingredients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The ingredient
 *       404:
 *         description: Ingredient not found
 */
router.get("/:id", (req, res) => {
  sendSuccess(res, { id: req.params["id"], placeholder: true });
});

export default router;
