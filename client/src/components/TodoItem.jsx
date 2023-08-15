import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useQueryClient, useMutation } from "react-query";
import deleteTodoRequest from "../api/deleteTodoRequest";
// import Button from "@mui/material/Button";
// import CardActions from "@mui/material/CardActions";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function TodoItem({ id, text, completed, comments }) {
  console.log(comments);
  const queryClient = useQueryClient();

  const { mutate: deleteTodo } = useMutation((id) => deleteTodoRequest(id), {
    onMutate: () => {
      const confirmed = confirm("Are you sure?");

      if (!confirmed) {
        signal;
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  return (
    <Card
      sx={{
        minWidth: 275,
        border: "1px solid black",
        maxWidth: 300,
        height: 100,
        marginTop: "10px",
        boxShadow: "0px 0px 0px 0px white",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" component="div">
            {text}
          </Typography>
          {comments.map((comment) => (
            <div key={comment._id}>{comment.content}</div>
          ))}
          <DeleteForeverIcon color="error" onClick={() => deleteTodo(id)} />
        </Box>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {completed ? "completed" : "not completed"}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">View</Button>
      </CardActions> */}
    </Card>
  );
}
