import {
    createBrowserRouter,
} from "react-router-dom";
import {Auth} from "../auth/Auth";
import {Authorized} from "../authorized/Authorized";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
    {
        path: "/auth",
        element: <Auth/>,
    },
    {
        path: "/authorized",
        element: <Authorized/>,
    }
]);