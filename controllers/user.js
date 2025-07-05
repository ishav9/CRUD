const userModel = require("../models/users"); // Importing the user model
const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userModel.find({});
        res.status(200).json({
            message: "All users fetched successfully",
            allUsers
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userModel.findById(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({
            message: "User fetched successfully",
            user
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch user" });
    }
};

const createUser = async (req, res) => {
    const { first_name, last_name, email, gender } = req.body;
    try {
        const newUser = new userModel({
            first_name,
            last_name,
            email,
            gender
        });
        await newUser.save();
        res.status(201).json({
            message: "User created successfully",
            newUser
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to create user" });
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, gender } = req.body;
    try {
        const updatedUser = await userModel.findByIdAndUpdate(id, {
            first_name,
            last_name,
            email,
            gender
        }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({
            message: "User updated successfully",
            updatedUser
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to update user" });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await userModel.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({
            message: "User deleted successfully"
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete user" });
    }
};

const patchUser = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const updatedUser = await userModel.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedUser) {     
            return res.status(404).json({ error: "User not found" });
        }       
        res.status(200).json({
            message: "User updated successfully",
            updatedUser 
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to update user" });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    patchUser,
    updateUser,
    deleteUser
};
