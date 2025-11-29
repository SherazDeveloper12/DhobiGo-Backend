const mongoose = require('mongoose');
require('dotenv').config();
async function main(){
    try {
        const uri = process.env.DATABASE_URL;
        if (!uri) {
            console.error('DATABASE_URL is not set. Create a .env file with DATABASE_URL in the project root.');
            process.exit(1);
        }
        await mongoose.connect(uri);
        console.log('Connected to MongoDB Atlas!');
    } catch (error) {
        console.error('Connection failed:', error.message);
        process.exit(1);
    }
}
module.exports = { main };