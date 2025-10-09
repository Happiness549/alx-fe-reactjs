import React, { useState } from "react";

const initialTodo = [
    {id: 1, text: "Learn React", completed: false},
    {id: 2, text: "Build a todo app", completed: false}
]

import React, { useState } from "react";

// Demo todos
const initialTodos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build a Todo App", completed: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState("");

  // Add a new todo
  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    const todo = { id: Date.now(), text: newTodo, completed: false };
    setTodos([...todos, todo]);
    setNewTodo("");
  };

  // Toggle completed status
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>Todo List</h2>

      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="New Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{ textDecoration: todo.completed ? "line-through" : "" }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
