import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Router from "./pages/router";
import Dashboard from "./pages/Dashboard";
import Notes from "./pages/Notes";
import Events from "./pages/Events"; 
import Files from "./pages/Files"; 

function App() {

  return (
      <BrowserRouter>
        <Router />
        <Routes>
        <Route path={`dashboard`} element={<Dashboard />}>
          <Route path={`notes`} element={<Notes />} />
          <Route path={`events`} element={<Events />} />
          <Route path={`files`} element={<Files />} />
        </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
