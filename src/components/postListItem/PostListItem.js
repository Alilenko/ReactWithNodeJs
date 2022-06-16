import * as React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function PostListItem() {
  return (
    <Card sx={{ marginY: 2 }}>
      <Link to="/post123" style={{ textDecoration: "none", color: "inherit" }}>
        <CardContent>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            textAlign="end"
          >
            08.06.2020
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Link>
    </Card>
  );
}
