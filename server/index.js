const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./database/db");
const todoRoutes = require("./routes/todoRoutes");

//middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/api", todoRoutes);

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
