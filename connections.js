// connection.js
const mongoose = require('mongoose');

const url = "mongodb+srv://isha:isha7664@cluster0.aykorqi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectToMongoDB() {
    await mongoose.connect(url);

}

module.exports = connectToMongoDB;
