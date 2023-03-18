import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import { privateRoutes, publicRoutes } from "../router";

const AppRouter = () => {
  const isAuth = true;
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          path={route.path}
          element={route.component}
          exact={route.exact}
        />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
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
