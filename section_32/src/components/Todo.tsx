import { FC } from "react";
import classes from "./Todo.module.css";
import TodoType from "../models/todo";

const Todo: FC<{
  todo: TodoType;
  handleRemoveTodoClick: (todoId: string) => void;
}> = ({ todo, handleRemoveTodoClick }) => {
  return (
    <li
      className={classes.item}
      onClick={() => handleRemoveTodoClick(todo.id)}
    >
      {todo.text}
    </li>
  );
};

export default Todo;
