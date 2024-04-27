const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://aparna:appu123@cluster0.cem0fsz.mongodb.net/", {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        });

        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
    } catch(error) {
        console.error(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
}

module.exports = connectDB;
