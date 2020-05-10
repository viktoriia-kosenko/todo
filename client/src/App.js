import React, { useState, useEffect } from 'react';
import './App.css';

const getTodos = () => {
  return fetch('/api', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
};

const saveTodo = todo => {
  const postParams = {
    body: JSON.stringify({ todo }),
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
  };
  return fetch('/api/save', postParams).then(res => {
    if (res.status >= 200 && res.status < 300) {
      return res.json();
    } else {
      throw res;
    }
  });
};

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');

  useEffect(() => {
    getTodos()
      .then(data => setTodoList(data))
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (!todo) {
      alert('You can add empty field');
    } else {
      //save data to db and update todoList
      saveTodo(todo)
        .then(data => {
          setTodo('');
          return getTodos();
        })
        .then(data => setTodoList(data))
        .catch(err => console.log('error occured', err));
    }
  };

  const displayTodos = todoList => {
    if (!todoList.length) return null;
    return todoList.map((todoItem, index) => (
      <p key={index}>{todoItem.todo}</p>
    ));
  };

  return (
    <div className="App">
      <p>Your todo list</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="text"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <p>{todo}</p>
        <button>Add todo</button>
      </form>
      <div>{displayTodos(todoList)}</div>
    </div>
  );
};

export default App;
