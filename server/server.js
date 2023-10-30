require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todos");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", todoRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
