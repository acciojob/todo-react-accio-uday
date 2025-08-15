import React from 'react';

function Todo({ todos, onDelete }) {
  return (
    <ul className="todo-list">
    {todos.map((todo) => (
      <li key={todo.id} className="todo-item">
  <span>{todo.text}</span>
<button onClick={() => onDelete(todo.id)}>Delete</button>
  </li>
    ))}
      </ul>
  );
}

export default Todo;
