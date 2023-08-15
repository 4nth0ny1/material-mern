import { useQuery } from "react-query";
import getTodosRequest from "../api/getTodosRequest";
import TodoItem from "./TodoItem";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function TodoList() {
  const { data, isLoading } = useQuery("todos", getTodosRequest);
  return (
    <div>
      <h2>TodoList</h2>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {isLoading ? (
          <div>Loading ...</div>
        ) : (
          data?.map((todo) => {
            return (
              <Grid item xs={2} sm={4} md={4} key={todo._id}>
                <Item>
                  <TodoItem
                    key={todo._id}
                    id={todo._id}
                    text={todo.text}
                    completed={todo.completed}
                  />
                </Item>
              </Grid>
            );
          })
        )}
      </Grid>
    </div>
  );
}
