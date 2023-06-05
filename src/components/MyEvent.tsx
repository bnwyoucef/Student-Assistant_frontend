import React from 'react'
import "./myEvents.css"

const MyEvent = () => {
  return (
    <div className="flex flex-col bg-white rounded shadow-lg sm:w-4/4 lg:w-4/5">
        <div className="w-full h-44 bg-top bg-cover rounded-t eventBg"></div>
        <div className="flex flex-col w-full md:flex-row">
            <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-900 uppercase bg-yellow-300 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                <div className="md:text-1xl">Jan</div>
                <div className="md:text-3xl">13</div>
                <div className="md:text-xl">7 pm</div>
            </div>
            <div className="p-4 font-normal text-gray-900 md:w-3/4">
                <h1 className="mb-4 font-bold leading-none tracking-tight text-yellow-700 sm:text-xl md:text-xl lg:text-2xl">2020 National Championship</h1>
                <p className="leading-normal line-clamp-3 text-gray-900">The College Football Playoff (CFP) determines the national champion of the top division of college football. The format fits within the academic calendar and preserves the sports unique and compelling regular season.</p>
            </div>
        </div>
    </div>
  )
}

export default MyEvent