// routes/userRoutes.js
const express = require('express');
const { registerUser, loginUser, getUserProfile, updateUserProfile, deleteUserProfile } = require('../controllers/user.controler');
const { authenticateUser } = require('../middleware/auth.middleware');
const { checkUserExists } = require('../middleware/user.middleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authenticateUser, loginUser);
router.get('/profile/:identifier', checkUserExists, getUserProfile);
router.put('/profile/:identifier', checkUserExists, updateUserProfile);
router.delete('/profile/:identifier', checkUserExists, deleteUserProfile);

module.exports = router;
