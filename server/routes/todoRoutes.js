// app/routes/todoRoutes.js
const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

router.post("/todos", todoController.createTodo);
// ... (other routes)

module.exports = router;
