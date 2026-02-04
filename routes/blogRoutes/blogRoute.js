import express from 'express';      // Import Express framework to create a router

import { createBlog } from '../../blog/blogController.js';    // Import the controller function that handles creating a blog. Contains the logic to check duplicates and save to DB.

const router = express.Router();        // Create a new Express Router instance.  Routers let you organize your routes in separate files.

router.post('/blog', createBlog);       // When someone sends POST request to /blog, run the createBlog function. createBlog checks DB, saves blog, and sends response back to client.

export default router;      // Make this router available to the main server file
