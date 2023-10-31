const express = require("express");
const router = express.Router();
const { getTodos, postTodo, deleteTodo, updateTodo } = require("../controllers/todoController");

router.get("/todos", getTodos);

router.post("/todo/new", postTodo);

router.delete("/todo/delete/:id", deleteTodo);

router.patch("/todo/complete/:id", updateTodo);

module.exports = router;
