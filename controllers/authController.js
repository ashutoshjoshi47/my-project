import bcrypt from 'bcrypt';        // Import bcrypt for hashing passwords before saving to DB

import User from '../models/user.js';       // Import the User model (Sequelize table) to read/write users


// Controller function to handle user registration
export const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;             // Extract data sent from client in request body.

    
    const existingUser = await User.findOne({ where: { email } });    // Check if a user with the same email already exists in DB.
    if (existingUser) {
     res.status(400).json({ message: 'User already exists' });          // If user exists, send 400 error to client and stop execution.
     return
    }

    const hashedPassword = await bcrypt.hash(password, 10);             // Hash the password using bcrypt (10 rounds of salt)

    
    await User.create({                      // Create a new user record in the DB with email and hashed password.A new row is now stored in the "Users" table.
      email,
      password: hashedPassword
    });

    res.json({ message: 'User registered successfully' });           // Send success response back to client

  } catch (error) {                      // If anything goes wrong (DB error, invalid input, etc.), catch it
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
