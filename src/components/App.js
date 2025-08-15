import React, { useState } from 'react';
import Todo from './Todo';
import './styles.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput('');
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id ));
  };

  return (
    <div className="app">
    <h1>To-Do List</h1>
    <div className="input-container">
    <input
  type="text"
  value={input}
  onChange={(e) => setInput(e.target.value)}
  placeholder="Enter a task"
  />
    <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  <Todo todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
}

export default App;
