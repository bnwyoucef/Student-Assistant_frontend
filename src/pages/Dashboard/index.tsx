
import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';
import "./index.css"
import { useState,useEffect } from "react";
import "./index.css"
import RightSide from "../RightSide/index.tsx"
import { useLocation } from 'react-router-dom';

const Index = () => {

  const navigate =useNavigate();

  const logout=()=>{
    localStorage.removeItem("user");
    navigate("/");
  }
  const [currentElement, setCurrentElement] = useState('');
  const location = useLocation();
  useEffect(() => {
    setCurrentElement(location.pathname)

  }, [location,currentElement])
  
  const selectedStyle = "flex hover:bg-yellow-50 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4 bg-yellow-200"
  const unSelectedStyle = "flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4"

  return (
    <div className=" overflow-hidden ">
      <aside className="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60">
        <div className="flex flex-col justify-between h-full">
          <div className="flex-grow">
            <div className="px-4 py-6 text-center border-b">
              <h1 className="text-xl font-bold leading-none"><span className="text-yellow-700">Student </span> Assistant</h1>
            </div>
            <div className="p-4">
              <ul className="space-y-1">
              <li>
                  <Link to="" className={currentElement === "/student" ? selectedStyle : unSelectedStyle}>
                  <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-lg mr-4">
                  <path fillRule="evenodd" clipRule="evenodd" d="M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V18C22 19.6569 20.6569 21 19 21H5C3.34315 21 2 19.6569 2 18V6ZM5 5C4.44772 5 4 5.44772 4 6V7H20V6C20 5.44772 19.5523 5 19 5H5ZM4 18V9H20V18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18ZM7.70711 11.2929C7.31658 10.9024 6.68342 10.9024 6.29289 11.2929C5.90237 11.6834 5.90237 12.3166 6.29289 12.7071L7.58579 14L6.29289 15.2929C5.90237 15.6834 5.90237 16.3166 6.29289 16.7071C6.68342 17.0976 7.31658 17.0976 7.70711 16.7071L9.70711 14.7071C10.0976 14.3166 10.0976 13.6834 9.70711 13.2929L7.70711 11.2929Z" fill="#000000"/>
                  </svg>Command Line
                  </Link>
                </li>
              <li>
                  <Link to="notes" className={currentElement === "/student/notes" ? selectedStyle : unSelectedStyle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
                      <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
                    </svg>Notes
                  </Link>
                </li>
                <li>

                  <Link to="events" className={currentElement === "/student/events" ? selectedStyle : unSelectedStyle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
                      <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                    </svg>Events
                  </Link>
                </li>

                <li>
                  <Link to="files" className={currentElement === "/student/files" ? selectedStyle : unSelectedStyle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
                      <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z" />
                    </svg>Files
                  </Link>
                </li>
                <li>
                  <Link to="reading" className={(currentElement === "/student/reading" || currentElement === "/student/article") ? selectedStyle : unSelectedStyle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
                      <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>Recommendation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-4 cursor-pointer">
            <button onClick={logout} type="button" className="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="" viewBox="0 0 16 16">
                <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
            </button > <span className="font-bold text-sm ml-2">Logout</span>
          </div>
        </div>
      </aside>

      <div className="ml-60 pt-10  overflow-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default Index
