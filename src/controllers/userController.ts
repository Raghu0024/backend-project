import { Request, Response } from 'express';
import User, { IUser } from '../models/User';

// Create a new user
export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userData: IUser = req.body.data;
    const user = new User(userData);
    await user.save();
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all users
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a user by user_id
export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.user_id;
    const user = await User.findOne({ user_id: userId });
    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a user by user_id
export const updateUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.user_id;
    const updatedData: IUser = req.body.data;
    const user = await User.findOneAndUpdate({ user_id: userId }, updatedData, {
      new: true,
    });
    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(200).json({ message: 'User updated successfully', user });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a user by user_id
export const deleteUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.user_id;
    const user = await User.findOneAndDelete({ user_id: userId });
    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(200).json({ message: 'User deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
