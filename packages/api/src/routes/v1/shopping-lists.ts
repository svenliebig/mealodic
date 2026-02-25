import { Router } from 'express';
import { sendSuccess } from '../../helpers/response.js';

const router = Router();

/**
 * @openapi
 * /shopping-lists:
 *   get:
 *     summary: List shopping lists
 *     description: Retrieve a paginated list of shopping lists
 *     tags: [Shopping Lists]
 *     responses:
 *       200:
 *         description: A list of shopping lists
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
 * /shopping-lists/{id}:
 *   get:
 *     summary: Get a shopping list
 *     description: Retrieve a single shopping list by ID
 *     tags: [Shopping Lists]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The shopping list
 *       404:
 *         description: Shopping list not found
 */
router.get('/:id', (req, res) => {
  sendSuccess(res, { id: req.params['id'], placeholder: true });
});

export default router;
