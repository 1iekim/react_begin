import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import Posts from "../pages/Posts";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="*" index element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouter;
