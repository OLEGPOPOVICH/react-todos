import { useCallback } from "react";
import { Todo } from "../Todo/Todo";
import classes from "./Todos.module.css";

export const Todos = ({
  todos,
  toggleDone,
  deleteTodo,
  todosEmpty
}) => {
  const handleToggleDone = useCallback((id) => {
    toggleDone(id)
  }, [toggleDone]);

  const handleDeleteTodo = useCallback((id) => {
    deleteTodo(id)
  }, [deleteTodo]);

  if (!todos.length) {
    return (
      <div className={classes.todosEmpty}>
        <h2>{todosEmpty}</h2>
      </div>
    )
  }

  return (
    <ul className={classes.todos}>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            {...todo}
            toggleDone={handleToggleDone}
            deleteTodo={handleDeleteTodo}
          />
        );
      })}
    </ul>
  );
};
