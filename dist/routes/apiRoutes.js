import { Router } from 'express';
import { createUser, getAllUsers, getUserById, updateUserById, deleteUserById, } from '../controllers/userController';
const router = Router();
// Create a new user
router.post('/users', createUser);
// Get all users
router.get('/users', getAllUsers);
// Get a user by user_id
router.get('/users/:user_id', getUserById);
// Update a user by user_id
router.put('/users/:user_id', updateUserById);
// Delete a user by user_id
router.delete('/users/:user_id', deleteUserById);
export default router;
