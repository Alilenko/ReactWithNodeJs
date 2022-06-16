import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import SingIn from "./pages/SingIn";
import CreateLinks from "./pages/CreateLinks";
import SingUp from "./pages/SingUp";
import Posts from "./pages/Posts";
import CreatePost from "./pages/CreatePost";
import HomePage from "./pages/HomePage";
import Post from "./components/post/Post";

export const useRouter = (isAuth) => {
  if (isAuth) {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateLinks />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post:id" element={<Post />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/singIn" element={<SingIn />} />
      <Route path="/singUp" element={<SingUp />} />
      <Route path="*" element={<Navigate to="/singIn" replace />} />
    </Routes>
  );
};
