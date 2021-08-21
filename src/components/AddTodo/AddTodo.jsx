import { memo, useState } from "react";
import { Button } from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";
import classes from "./AddTodo.module.css";

export const AddTodo = memo(({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    addTodo(todo);
    setTodo("");
  };

  return (
    <div className={classes.wrapAddTodo}>
      <Input type="text" name="todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <Button type="button" buttonName="Добавить" onClick={handleAddTodo} />
    </div>
  );
});
