import { routerType } from "../types/router.types";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";



const pagesData: routerType[] = [
    {
        title: "sign-up",
        path: "sign-up",
        element: <SignUp />,
    },
    {
        title: "sign-in",
        path: "",
        element: <SignIn />,
    },
    // {
    //     title: "dashboard",
    //     path: "dashboard",
    //     element: <Dashboard />,
    // }
]

export default pagesData;