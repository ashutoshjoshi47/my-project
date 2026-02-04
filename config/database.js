
// Sequelize is an ORM (Object Relational Mapper) used to interact with databases.

// Import Sequelize class (main engine used to connect and talk to the database)
import { Sequelize } from 'sequelize';


import dotenv from 'dotenv';    // Load environment variables from .env file
dotenv.config();      // Load all variables from .env into process.env. After this, process.env.DB_NAME etc. become available.

// Create a new Sequelize instance(this is the actual DB connection)
export const sequelize = new Sequelize(
  process.env.DB_NAME,      
  process.env.DB_USER,     
  process.env.DB_PASSWORD,  
  {
    host: process.env.DB_HOST,      // (e.g., localhost)
    port: process.env.DB_PORT,      // (e.g., 5432)
    dialect: 'postgres'       
  }
);

export default sequelize;     //Allows importing as: import sequelize from './database.js'
