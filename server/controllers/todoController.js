const mongoose = require("mongoose");
const Todo = require("../models/Todo");

const getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json({ todos: todos });
};

//   if (!id) {
//     return res.status(404).json({ error: "Invalid id" });
//   }

const postTodo = async (req, res) => {
  const todo = new Todo({
    text: req.body.text,
  });

  todo.save();

  res.status(200).json(todo);
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;

  const result = await Todo.findByIdAndDelete(id);

  res.status(200).json({ message: "Todo deleted" });
};

const updateTodo = async (req, res) => {
  const { id } = req.params;

  const todo = await Todo.findById(id);

  todo.complete = !todo.complete;

  todo.save();

  res.status(200).json({ message: "Todo updated" });
};

module.exports = { getTodos, postTodo, deleteTodo, updateTodo };
