import { Router } from 'express';
import { sendSuccess } from '../../helpers/response.js';

const router = Router();

/**
 * @openapi
 * /recipes:
 *   get:
 *     summary: List recipes
 *     description: Retrieve a paginated list of recipes
 *     tags: [Recipes]
 *     responses:
 *       200:
 *         description: A list of recipes
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 */
router.get('/', (_req, res) => {
  sendSuccess(res, [], { page: 1, pageSize: 20, total: 0, totalPages: 0 });
});

/**
 * @openapi
 * /recipes/{id}:
 *   get:
 *     summary: Get a recipe
 *     description: Retrieve a single recipe by ID
 *     tags: [Recipes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The recipe
 *       404:
 *         description: Recipe not found
 */
router.get('/:id', (req, res) => {
  sendSuccess(res, { id: req.params['id'], placeholder: true });
});

export default router;
