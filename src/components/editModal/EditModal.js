import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useHttp } from "../../hooks/http.hook";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const EditModal = ({ id, item, setOpen, getPost }) => {
  const [post, setPost] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const { request } = useHttp();
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  useEffect(() => {
    setPost(item);
    setTitle(item.title);
    setText(item.text);
  }, [id, item]);

  const editPost = async (id) => {
    try {
      const data = await request(
        `/api/post/edit/${id}`,
        "PUT",
        {
          title,
          text,
          userName: post.userName,
          owner: post.userId,
        },
        {
          Authorization: `Bearer ${auth.token}`,
        }
      ).then(navigate(`/posts/${id}`));
      setPost([]);
      setTitle("");
      setText("");
      setOpen(false);
      getPost(id);
    } catch (e) {}
  };

  return (
    <Box sx={{ ...style, minWidth: 400 }}>
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
        onClick={() => editPost(id)}
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Save changes
      </Button>
    </Box>
  );
};
export default EditModal;
