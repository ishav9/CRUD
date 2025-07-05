const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    


});

const userModel = mongoose.model("User", userSchema); // this creates a model from the schema

module.exports = userModel; // this exports the model so it can be used in other files
// The model name is "User" and it will be stored in a collection named "users" in the MongoDB database.
// Mongoose automatically pluralizes the model name to create the collection name.  