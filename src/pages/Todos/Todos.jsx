import { useEffect } from "react";
import { AddTodo } from "../../components/AddTodo/AddTodo";
import { Todos } from "../../components/Todos/Todos";
import { storage } from "../../helpers/storage";
import { useTodos } from "../../hooks/useTodos";

export const TodoPage = () => {
  const {
    todos,
    initTodos,
    toggleDone,
    deleteTodo,
    addTodo
  } = useTodos();

  useEffect(() => {
    const data = storage.getItem("todos");

    if (data.length) {
      initTodos(data);
    }
  }, [initTodos])

  useEffect(() => {
    storage.setItem("todos", todos);
  }, [todos]);

  return (
    <div className="wrap__todos">
      <h1>Todos</h1>
      <AddTodo addTodo={addTodo} />
      <Todos
        todos={todos}
        toggleDone={toggleDone}
        deleteTodo={deleteTodo}
        todosEmpty="Нет задач"
      />
    </div>
  );
};
