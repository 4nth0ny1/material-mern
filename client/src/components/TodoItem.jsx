import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
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

export default function TodoItem({ text, completed }) {
  return (
    <Card
      sx={{
        minWidth: 275,
        border: "1px solid black",
        maxWidth: 300,
        height: 100,
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {text}
        </Typography>
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
