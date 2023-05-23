import { routerType } from "../types/router.types";
import SignIn from "./SignIn";
import SignUp from "./SignUp";


const pagesData: routerType[] = [
    {
        title: "sign-up",
        path: "sign-up",
        element: <SignUp/>,
    },
    {
        title: "sign-in",
        path: "",
        element: <SignIn/>,
    }
]

export default pagesData;