import { Router } from 'express';
import { sendSuccess } from '../../helpers/response.js';

const router = Router();

/**
 * @openapi
 * /users:
 *   get:
 *     summary: List users
 *     description: Retrieve a paginated list of users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A list of users
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
 * /users/{id}:
 *   get:
 *     summary: Get a user
 *     description: Retrieve a single user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The user
 *       404:
 *         description: User not found
 */
router.get('/:id', (req, res) => {
  sendSuccess(res, { id: req.params['id'], placeholder: true });
});

export default router;
