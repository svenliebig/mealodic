import { Router } from 'express';
import { sendSuccess } from '../../helpers/response.js';

const router = Router();

/**
 * @openapi
 * /meal-plans:
 *   get:
 *     summary: List meal plans
 *     description: Retrieve a paginated list of meal plans
 *     tags: [Meal Plans]
 *     responses:
 *       200:
 *         description: A list of meal plans
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
 * /meal-plans/{id}:
 *   get:
 *     summary: Get a meal plan
 *     description: Retrieve a single meal plan by ID
 *     tags: [Meal Plans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The meal plan
 *       404:
 *         description: Meal plan not found
 */
router.get('/:id', (req, res) => {
  sendSuccess(res, { id: req.params['id'], placeholder: true });
});

export default router;
