// Import necessary modules using ES module syntax
import express from 'express';
import cors from 'cors'; // Make sure you have 'cors' installed as a dependency
import dotenv from 'dotenv'; // Import 'dotenv' for environment variables

// Import your custom functions/modules here (e.g., connectToDatabase)

// Create an Express app
const app = express();
const port = process.env.PORT || 3004;

// Middleware to parse JSON request bodies
app.use(express.json());

// Load environment variables from a .env file if present
dotenv.config();

// Connect to the database (use your actual function here)
// Example: import connectToDatabase from './config/database';
// connectToDatabase();

// Define your routes and other application logic here

// Define a default route
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
