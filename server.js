const express = require('express');
const app = express();
app.use(express.json());

let todos = [{ id: 1, task: "Buy milk" }];

// GET all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// POST a new todo
app.post('/todos', (req, res) => {
    const newTodo = { id: todos.length + 1, task: req.body.task };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// DELETE a todo
app.delete('/todos/:id', (req, res) => {
    todos = todos.filter(todo => todo.id !== parseInt(req.params.id));
    res.status(204).send();
});

module.exports = app;
