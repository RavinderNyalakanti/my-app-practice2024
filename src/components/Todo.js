import React, { useState } from 'react';
import './com.css';

function Todo() {
  // State for managing todo items
  // State for managing todo items
  const [todos, setTodos] = useState([]);
  // State for managing the input field
  const [input, setInput] = useState('');

  // Function to handle adding a new todo
  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  // Function to handle marking a todo as completed
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to handle deleting a todo
  const deleteTodo = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this task?');
    if (confirmDelete) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  // Function to handle editing a todo
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };


  return (
     <div className="App">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span>{todo.text}</span>
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
              />
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              <button onClick={() => editTodo(todo.id, prompt('Enter new text', todo.text))}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
