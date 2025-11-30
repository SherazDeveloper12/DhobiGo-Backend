const mongoose = require('mongoose');
require('dotenv').config();
const main = async () => {
  try {
     const uri = process.env.DATABASE_URL;
     if (!uri) {
      console.error('DATABASE_URL is not set. Create a .env file with DATABASE_URL in the project root.');
      process.exit(1);
  }
    await mongoose.connect(uri, {
      dbName: 'DhoobiGo'
    })
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    process.exit(1);
  }
  }
export { main };