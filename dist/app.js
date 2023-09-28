import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import apiRoutes from './routes/apiRoutes';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from a .env file if present
const app = express();
const PORT = process.env.PORT || 3004;
const MONGO_URI = process.env.MONGO_URI || 'your-mongodb-uri-here';
// Middleware
app.use(express.json());
app.use(cors());
// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});
// Routes
app.use('/api', apiRoutes);
app.get('/', (req, res) => {
    res.send('Welcome to the API');
});
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error', message: err.message }); // Include the error message in the response
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
