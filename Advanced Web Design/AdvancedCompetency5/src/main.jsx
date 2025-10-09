import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SplashPage from "./Pages/SplashPage.jsx";
import MenuPage from "./Pages/MenuPage.jsx";
import HiringPage from "./Pages/HiringPage.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import AppLayout from "./Components/AppLayout.jsx";

const router = createBrowserRouter([{
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage/>,
    children: [
        {path: "/hiring", element: <HiringPage/>},
        {path: "/menu", element: <MenuPage/>},
        {path: "/", element: <SplashPage/>},
        {path: "*", element: <ErrorPage/>},
        {index: true, element: <SplashPage/>},
    ]
}]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={(router)}/>
    </StrictMode>,
)
