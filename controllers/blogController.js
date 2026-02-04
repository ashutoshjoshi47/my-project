import blog  from '../models/blog.js';    // Import the Blog model (Sequelize table) to interact with the "blogs" table


// Controller function to handle creating a new blog.
export const createBlog = async (req, res) => {     //This defines a function that Express can call when someone hits your “create blog” route, req(user(body,param,header),res(JSON,error messages).
                                                          
  try {
    const {title, description,photo,authorname, rating,date} = req.body;      // Extract data sent from client in request body.
    
    // check if user exists
    const existingTitle = await blog.findOne({ where: { title  } });        // Check if a blog with the same title already exists
    if (existingTitle) {
     res.status(400).json({ message: 'User already exists' });             // If title exists, return 400 error to client
     return
    }
    
    // Create a new blog record in the database
    await blog.create({
      title,
      description,
      photo,
      authorname,
      rating,
      date
    });

    res.json({ message: 'blog registered successfully' });     // Send success response back to client

  } catch (error) {             // Catch any errors (DB failure, validation, etc.)
    console.error(error);        // Log error in server console
    res.status(500).json({ message: 'Server error' });
  }
};
