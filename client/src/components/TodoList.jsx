import { useQuery } from "react-query";
import getTodosRequest from "../api/getTodosRequest";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { data, isLoading } = useQuery("todos", getTodosRequest);
  return (
    <div>
      <h2>TodoList</h2>

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        data?.map((todo) => {
          return (
            <TodoItem
              key={todo._id}
              text={todo.text}
              completed={todo.completed}
            />
          );
        })
      )}
    </div>
  );
}
