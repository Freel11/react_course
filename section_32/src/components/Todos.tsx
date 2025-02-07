import React, { ReactNode } from "react";
import TodoType from "../models/todo";
import Todo from "./Todo";
import classes from "./Todos.module.css";

interface TodosProps {
  children?: ReactNode;
  items: TodoType[];
  onRemoveTodo: (todoId: string) => void;
}

const Todos: React.FC<TodosProps> = ({ items, onRemoveTodo }) => {
  const handleRemoveTodo = (todoId: string): void => {
    onRemoveTodo(todoId);
  };

  return (
    <ul className={classes.todos}>
      {items.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleRemoveTodoClick={handleRemoveTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
