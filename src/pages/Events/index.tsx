import React, { useState, useEffect } from 'react'
import MyEvent from './../../components/MyEvent';

const Events = () => {
  const [events, setEvents] = useState([1,2,3,4,5,6])
  useEffect(() => {
    return async () => {
      try {
        //fetch the events and set it to the events array
      } catch (error:any) {
        //setErrMsg(error.message);
      }
    }
  }, [])

  const eventList = events.map((myEvent, index) => {
    return <MyEvent key={index} />
  });
  return (
    <div>
      <div className="px-4 md:px-10 py-4 md:py-7">
        <div className="sm:flex items-center justify-between mx-auto lg:pr-16">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Events</p>
          <div className="mt-4 sm:mt-0">
            <button className="text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center hover:bg-yellow-300 bg-yellow-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Add Event</span>
            </button>
          </div>
          </div>
      </div>
      <div className="mx-auto container pb-20 px-6">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                  {events.length !== 0 && eventList}
                  {events.length === 0 && "There are no events to display"}
          </div>
      </div>
    </div>
  )
}

export default Events