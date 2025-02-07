import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodoType from "./models/todo";
import { useState } from "react";

function App() {
  const [todos, setTodods] = useState<TodoType[]>([]);

  const handleAddTodo = (todoText: string): void => {
    setTodods((prevTodos) => {
      return [new TodoType(todoText), ...prevTodos];
    });
  };

  const handleRemoveTodo = (todoId: string): void => {
    setTodods((prevTodos) => {
      return [...prevTodos.filter((todo) => todo.id !== todoId)];
    });
  };

  return (
    <>
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos
        onRemoveTodo={handleRemoveTodo}
        items={todos}
      />
    </>
  );
}

export default App;
