var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import User from '../models/User';
// Create a new user
export const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body.data;
        const user = new User(userData);
        yield user.save();
        res.status(201).json({ message: 'User created successfully', user });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// Get all users
export const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User.find();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// Get a user by user_id
export const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.user_id;
        const user = yield User.findOne({ user_id: userId });
        if (!user) {
            res.status(404).json({ error: 'User not found' });
        }
        else {
            res.status(200).json(user);
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// Update a user by user_id
export const updateUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.user_id;
        const updatedData = req.body.data;
        const user = yield User.findOneAndUpdate({ user_id: userId }, updatedData, {
            new: true,
        });
        if (!user) {
            res.status(404).json({ error: 'User not found' });
        }
        else {
            res.status(200).json({ message: 'User updated successfully', user });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// Delete a user by user_id
export const deleteUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.user_id;
        const user = yield User.findOneAndDelete({ user_id: userId });
        if (!user) {
            res.status(404).json({ error: 'User not found' });
        }
        else {
            res.status(200).json({ message: 'User deleted successfully' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
