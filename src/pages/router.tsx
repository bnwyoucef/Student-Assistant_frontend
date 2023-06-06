import pagesData from "./pagesData"
import { routerType } from "../types/router.types";
import { Route,Routes } from "react-router-dom";


const router = () => {
  const pageRoutes = pagesData.map(({title,path,element}:routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />
  });
  return (<>
    {pageRoutes}</>);
}

export default router;
