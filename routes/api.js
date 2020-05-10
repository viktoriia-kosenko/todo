//const router = require("express").Router();
const express = require('express');
const router = express.Router();
const Todo = require('../model/Todo');

router.get('/', (req, res) => {
  Todo.find({})
    .then(data => {
      res.json(data);
    })
    .catch(error => console.log('error', error));
});

router.post('/save', (req, res) => {
  const data = req.body;
  const newTodo = new Todo(data);

  newTodo.save(error => {
    if (error) {
      res.status(500).json({ msg: 'Sorry, internal server error' });
      return;
    }

    return res.json({ msg: 'we received your data' });
  });
});

module.exports = router;
