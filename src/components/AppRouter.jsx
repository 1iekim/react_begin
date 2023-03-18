import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import { router } from "../router";

const AppRouter = () => {
  return (
    <Routes>
      {router.map((route) => (
        <Route
          path={route.path}
          element={route.component}
          exact={route.exact}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
