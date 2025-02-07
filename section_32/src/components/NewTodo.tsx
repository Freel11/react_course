import { FC, useRef } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: FC<{ onAddTodo: (text: string) => void }> = ({ onAddTodo }) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredValue = todoTextInputRef.current!.value;

    if (enteredValue.trim().length === 0) {
      return;
    }

    onAddTodo(enteredValue);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input
        type="text"
        id="text"
        ref={todoTextInputRef}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
