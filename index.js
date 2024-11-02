require("dotenv").config();
const express = require("express");
const cors = require("cors");
const blogsRouter = require("./controller/blogs");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT;

// connecting to DB
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI);

app.use(cors());
app.use(express.json());
app.use(blogsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
