import React, { useEffect, useState, useContext } from "react";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import FilterTabs from "../components/filterTabs/FilterTabs";
import Container from "@mui/material/Container";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const { request, loading } = useHttp();
  const [value, setValue] = useState("all");
  const auth = useContext(AuthContext);

  useEffect(() => {
    getPosts();
  }, [value]);

  const getPosts = async () => {
    try {
      const data = await request("/api/post/posts", "GET");
      if (value === "all") {
        setPosts(data.posts);
      } else {
        const filterData = data.posts.filter(
          (item) => item.userName == auth.userName
        );
        setPosts(filterData);
      }
    } catch (e) {}
  };

  return (
    <Container maxWidth="md">
      <FilterTabs
        posts={posts}
        value={value}
        setValue={setValue}
        loading={loading}
      />
    </Container>
  );
};

export default Posts;
