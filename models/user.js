
import { DataTypes } from 'sequelize'; //// Import DataTypes so Sequelize knows what kind of columns to create in PostgreSQL

import { sequelize } from '../config/database.js'; // All tables defined here will be created in THIS database . ES6 import, add .js 

const User = sequelize.define('User', {   //// Define a table called "Users" (Sequelize auto-pluralizes "blog")

//Stores user's email address (used for login)
  email: {
    type: DataTypes.STRING,  //VARCHAR column
    allowNull: false,         
    unique: true             
  },

 // Stores user's hashed password (never plain text)
  password: {
    type: DataTypes.STRING,   
    allowNull: false         
  }

});

// Export User model so it can be used in routes/controllers
export default User;
