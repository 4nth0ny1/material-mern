import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
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
        marginTop: "10px",
        boxShadow: "0.1px 0.1px 0.1px 0.5px gray",
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
          <DeleteForeverIcon color="error" />
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
