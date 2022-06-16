import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";

export default function Post() {
  return (
    <Container maxWidth="md">
      <Card sx={{ marginY: 2 }}>
        <CardContent>
          <Grid container>
            <Grid item xs={8}>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                alignSelf="center"
              >
                08.06.2020
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Stack direction="row" spacing={2} justifyContent="flex-end">
                <Button variant="outlined" startIcon={<DeleteOutlineIcon />}>
                  Delete
                </Button>
                <Button variant="outlined" startIcon={<EditIcon />}>
                  Edit
                </Button>
              </Stack>
            </Grid>
          </Grid>

          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Container>
  );
}
