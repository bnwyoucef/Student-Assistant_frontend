import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Router from "./pages/router";
import Dashboard from "./pages/Dashboard";
import Notes from "./pages/Notes";
import Events from "./pages/Events"; 
import Files from "./pages/Files"; 
import AuthRoutes from './authRoutes/authRoutes';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Main from  './pages/Main'
import Recommendation from './pages/Recommendation';


function App() {

  return (
      <BrowserRouter>
        <Routes>
        <Route key="sign-in" path={`/`} element={<SignIn/>} />
        <Route key="sign-up" path={`/sign-up`} element={<SignUp/>} />
        <Route path="/student" element={<AuthRoutes/>}>
          <Route path="" element={<Dashboard />} >
          <Route path="" element={<Main />} />
          <Route path="notes" element={<Notes />} />
          <Route path="events" element={<Events />} />
          <Route path="files" element={<Files />} />
          <Route path="reading" element={<Recommendation />} />
        </Route>
        </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
