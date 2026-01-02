import { Router } from 'express';
import { getUsers } from '../controllers/userController';

const router = Router();

// Get /api/users
router.get('/users', getUsers);

export default router;