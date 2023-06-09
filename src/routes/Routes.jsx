import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Login/Register";
import Login from "../Pages/Login/Login";
import AllToys from "../Pages/AllToys/AllToys";
import ToyDetails from "../Pages/Home/ToyDetails/ToyDetails";
import PrivateRoute from "./PrivateRoute";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToy from "../Pages/MyToys/UpdateToy";
import ErrorPage from "../ErrorPage";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/allToys',
                element: <PrivateRoute><AllToys /></PrivateRoute>
            },
            {
                path: '/toyDetails/:_id',
                element: <PrivateRoute><ToyDetails /></PrivateRoute>,
                loader: ({params}) => fetch(`https://toys-verse-server-site.vercel.app/toyDetails/${params._id}`)
            },
            {
                path: '/addToy',
                element: <PrivateRoute><AddToy /></PrivateRoute>
            },
            {
                path: '/myToys',
                element: <PrivateRoute><MyToys /></PrivateRoute>
            },
            {
                path: '/updateToy/:id',
                element: <PrivateRoute><UpdateToy /></PrivateRoute>,
                loader: ({params}) => fetch(`https://toys-verse-server-site.vercel.app/toys/${params.id}`)
            },
        ]
    }
])

export default router;