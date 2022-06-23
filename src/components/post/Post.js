import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useHttp } from "../../hooks/http.hook";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import useDate from "../../hooks/date.hook";
import EditModal from "../editModal/EditModal";
import Spinner from "../spinner/Spinner";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [open, setOpen] = useState(false);
  const [dis, setDis] = useState(true);
  const { request, loading } = useHttp();
  const { createdAt, title, text, _id, userName } = post;
  const { day, month, year } = useDate(createdAt);
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  useEffect(() => {
    getPost(id);
  }, []);

  const getPost = async (id) => {
    try {
      const data = await request(`/api/post/posts/${id}`, "GET");
      setPost(data.post);
      if (auth.userId == data.post.owner) {
        setDis(false);
      }
    } catch (e) {}
  };

  if (loading) {
    return <Spinner />;
  }

  const deletePost = async (id) => {
    try {
      await request(`/api/post/posts/${id}`, "DELETE")
        .then(setPost([]))
        .then(navigate("/posts"));
    } catch (e) {}
  };

  const handleOpen = (id) => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
                {day ? day : null} {month ? month : null} {year ? year : null}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                alignSelf="center"
              >
                Author: {userName}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Stack direction="row" spacing={2} justifyContent="flex-end">
                <Button
                  onClick={() => deletePost(_id)}
                  variant="outlined"
                  startIcon={<DeleteOutlineIcon />}
                >
                  Delete
                </Button>
                <Button
                  onClick={() => handleOpen(_id)}
                  variant="outlined"
                  startIcon={<EditIcon />}
                  disabled={dis}
                >
                  Edit
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </Card>
      {open ? (
        <Modal open={open} onClose={handleClose}>
          <div>
            <EditModal
              id={_id}
              item={post}
              setOpen={setOpen}
              getPost={getPost}
            />
          </div>
        </Modal>
      ) : null}
    </Container>
  );
}
