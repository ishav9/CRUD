const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  patchUser,
  deleteUser
} = require("../controllers/user");

// Get all users
router.get("/", getAllUsers);

// Get user by ID
router.get("/:id", getUserById);

// Create new user
router.post("/", createUser);

// Update user by ID
router.patch("/:id", updateUser);

// Delete user by ID
router.delete("/:id", deleteUser);

router.patch("/:id", patchUser);
module.exports = router;
