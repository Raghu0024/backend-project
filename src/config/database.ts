import mongoose from 'mongoose';

// Make sure to URL-encode the password to handle special characters
const MONGO_PASSWORD = encodeURIComponent('Raghu@0024');
const MONGO_URI = `mongodb+srv://vamsiraghu0024:${MONGO_PASSWORD}@cluster0.0qsclnt.mongodb.net/?retryWrites=true&w=majority`;
// Your MongoDB URI here

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

export default connectToDatabase;

