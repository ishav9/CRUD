const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const app = express();
const loggerRequest = require("./middleware/log"); // Note: fix spelling to loggerRequest
const connectToDB = require("./connections"); // Import the connection function
const userRouter = require("./routes/user"); // Import the user router

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggerRequest("log.txt"));

// Connect to MongoDB before starting the server
(async () => {
  try {
    

    // Mount routes AFTER DB connection
    app.use("/api/users", userRouter);

    // Start server
    app.listen(8000, () => {
      console.log("Server is running on port 8000");
    });
    await connectToDB();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
})();
