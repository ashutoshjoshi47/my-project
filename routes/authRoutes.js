import express from 'express';       // Import Express framework to create a router

import { registerUser } from '../controllers/authController.js';    // Import the controller function that handles user registration. Contains the logic to check if user exists, hash password, and save to DB

const router = express.Router();   // It helps organize routes and keep code clean

router.post('/register', registerUser);     // When a client sends POST /register, Express calls the registerUser function

export default router;        // Make this router available to the main server file  
