import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
    {path: '/about', component: <About/>, exact: true},
    {path: '/', component: <About/>, exact: true},
    {path: '/posts', component: <Posts/>, exact: true},
    {path: '/posts/:id', component: <PostIdPage/>, exact: true},
    {path: '*', component: <ErrorPage/>, exact: false},
]

export const publicRoutes = [
    {path: '/login', component: <Login/>, exact: true},
    // {path: '/about', component: <About/>, exact: true},
    // {path: '/', component: <About/>, exact: true},
    // {path: '/posts', component: <Posts/>, exact: true},
    // {path: '/posts/:id', component: <PostIdPage/>, exact: true},
    {path: '*', component: <Login/>, exact: false},
]