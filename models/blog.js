import { DataTypes } from 'sequelize'; // Import DataTypes so Sequelize knows what kind of columns to create in PostgreSQL

import { sequelize } from '../config/database.js'; // All tables defined here will be created in THIS database

export const blog = sequelize.define('blog', {     // Define a table called "blogs" (Sequelize auto-pluralizes "blog")
  
  //Used to identify who created the blog saved as VARCHAR in PostgreSQL.
 
  // Main blog content (long text)
 description: {
    type: DataTypes.TEXT,
    allowNull: false
 },

 
 // Blog heading/title shown on frontend
 title: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
    },


// Image filename or URL for the blog banner    
photo: {
  type: DataTypes.STRING, 
  allowNull: true
},


// Name displayed as blog author
authorname: {
    type: DataTypes.STRING,
    allowNull: false
},


// Date when the blog is published
date: {
    type: DataTypes.DATE,
    allowNull: false
},


// Rating given to the blog (1 to 5)
rating: {
  type: DataTypes.INTEGER,
  allowNull: true,
  validate: {
    min: 1,
    max: 5
  }
},

// Stores multiple external links related to the blog
links: {
  type: DataTypes.ARRAY(DataTypes.STRING),
  allowNull: true
},

});

// Export this model so routes/controllers can use it. Example: blog.create(), blog.findAll()
export default blog;