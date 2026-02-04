import express from 'express';    // Import Express framework to create server and handle routes
import dotenv from 'dotenv';      // Import dotenv to load environment variables (DB credentials, PORT, etc.)
import sequelize from './config/database.js';  
import authRoutes from './routes/authRoutes.js'; 
import blogRoute from './routes/blogRoutes/blogRoute.js';

dotenv.config();        // Load variables from .env into process.env

const app = express();      // Initialize Express app
app.use(express.json());      //Whenever a request comes in with JSON data, automatically read it and put it in req.body as a JavaScript object.” (the place where Express stores data sent by the client in the request.)


app.use('/', authRoutes);     // Register routes for authentication. POST /register, POST /login.
app.use('/', blogRoute);      //Register routes for blog operations.  POST /blog, GET /blog


// Sync database tables with models defined in Sequelize
sequelize.sync()
  .then(() => {
    console.log('Database synced');           // Confirm DB connection and tables are ready.


     // Start server on specified port from .env or default 5000
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch(err => console.error(err));        // Log errors if DB sync fails
