import { memo } from "react";
import { Button } from "../UI/Button/Button";
import { Checkbox } from "../UI/Checkbox/Checkbox";
import classes from "./Todo.module.css"

export const Todo = memo(({
  id,
  title,
  done,
  toggleDone,
  deleteTodo
}) => {
  const titleClases = [
    classes.todoTitle,
    done
      ? classes.todoTitleDone
      : ""
  ].join(" ");

  return (
    <li>
      <Checkbox
        name="todo"
        checked={done}
        onChange={() => toggleDone(id)}
      />
      <span className={titleClases}>{title}</span>
      <Button
        type="button"
        buttonName="Delete"
        onClick={() => deleteTodo(id)}
      />
    </li>
  );
});

