import React from "react";
import { Link } from "react-router-dom";
import useDate from "../../hooks/date.hook";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function PostListItem({ post }) {
  const { _id, title, text, createdAt, userName } = post;
  const { day, month, year } = useDate(createdAt);

  function transcate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <Card sx={{ marginY: 2 }}>
      <Link
        to={`/posts/${_id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardContent>
          <Grid container>
            <Grid item xs={6}>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                textAlign="start"
              >
                Author: {userName}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                textAlign="end"
              >
                {day ? day : null} {month ? month : null} {year ? year : null}
              </Typography>
            </Grid>
          </Grid>

          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {transcate(text, 250)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">More</Button>
        </CardActions>
      </Link>
    </Card>
  );
}
