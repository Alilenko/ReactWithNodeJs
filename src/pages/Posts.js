import React, { useEffect } from "react";
import { useHttp } from "../hooks/http.hook";
import Container from "@mui/material/Container";
import PostListItem from "../components/postListItem/PostListItem";

const Posts = () => {
  const { request } = useHttp();

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const data = await request("/api/post/posts", "GET");
      console.log(data);
    } catch (e) {}
  };

  return (
    <Container maxWidth="md">
      <PostListItem />
    </Container>
  );
};

export default Posts;
