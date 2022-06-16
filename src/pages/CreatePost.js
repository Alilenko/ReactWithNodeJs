import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const CreatePost = () => {
  const auth = useContext(AuthContext);
  const { request } = useHttp();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const createPost = async () => {
    try {
      const data = await request(
        "/api/post/add-post",
        "POST",
        {
          title,
          text,
        },
        {
          Authorization: `Bearer ${auth.token}`,
        }
      );
    } catch (e) {}
  };

  return (
    <Container maxWidth="md">
      <Card sx={{ marginY: 2 }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            textAlign="center"
          >
            Add new post!
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Title"
              name="title"
              autoComplete="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="text"
              label="Text"
              name="text"
              autoComplete="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button
              onClick={createPost}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CreatePost;
