import { useQuery } from "react-query";
import getTodosRequest from "../api/getTodosRequest";

export default function TodoList() {
  const { data, isLoading } = useQuery("todos", getTodosRequest);
  return (
    <div>
      <h2>TodoList</h2>

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        data?.map((todo) => {
          return <div key={todo._id}>{todo.text}</div>;
        })
      )}
    </div>
  );
}
