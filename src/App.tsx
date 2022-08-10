import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

const App: React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (title: string) => {
    setTodos(prevTodos => [
      ...prevTodos, {
        id: Math.random().toString(), 
        title: title
      }
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;
