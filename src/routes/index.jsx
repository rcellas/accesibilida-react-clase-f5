import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import SecondaryPage from "../pages/SecondaryPage/SecondaryPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/quien-soy",
        element: <SecondaryPage />
    }
])