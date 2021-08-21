import { useCallback, useState } from "react";
import { getUUID } from "../helpers/common";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);

  const initTodos = useCallback((todos) => {
    setTodos(todos);
  }, [])

  const addTodo = useCallback((todo) => {
    if (todo.trim()) {
      const newTodo = {
        id: getUUID(),
        title: todo,
        done: false
      };
      setTodos(
        (prevState) => [...prevState, newTodo]
      );
    }
  }, []);

  const toggleDone = useCallback((id) => {
    setTodos((prevTodos) => {
      return [...prevTodos.map((todo) => {
        if (todo.id === id) {
          todo = {...todo, done: !todo.done}
        }

        return todo;
      })]
    })
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos((prevTodos) => {
      return [...prevTodos.filter((todo) => todo.id !== id)]
    })
  }, []);

  return {
    todos,
    initTodos,
    addTodo,
    toggleDone,
    deleteTodo
  }
};