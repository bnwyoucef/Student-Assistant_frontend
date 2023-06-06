import { Scheduler } from "@aldabil/react-scheduler";
import { EventActions, ProcessedEvent, ViewEvent } from "@aldabil/react-scheduler/types";
import axios from '../../Api/Axios';
import React, { Component, useEffect, useState } from "react";
import "./index.css"
import { json, useNavigate } from "react-router-dom";
function Events() {

  const navigate=useNavigate();
  const dragable =false;
  const dayParam = {
    weekDays: 
    [0, 1, 2, 3, 4, 5], 
weekStartOn: 6, 
    startHour: 7,
    endHour: 24,
    step:60
  };

  const checkAuth=()=>{

    const user =localStorage.getItem("user");
    if (user){
      return;
    }
    else{
      navigate("");
    }
  }
  
  useEffect(()=>{
checkAuth();
  },[])

  const fetchRemote = async (query: ViewEvent): Promise<ProcessedEvent[]> => {
    checkAuth();
      return new Promise((ress) => {
        axios
          .get("/ms-events/api/events", { params: { id: localStorage.getItem("user") } })
          .then((res) => {
            console.log(localStorage.getItem("user"))
            console.log(res)
            const array = res.data.map((item:any) => ({
              event_id: item.event_id,
              title: item.title,
              start: new Date(item.start),
              end: new Date(item.end),
            }));
  
            ress(array);
          });
      });
  
  };



  const handleInsert = async (
    event: ProcessedEvent,
    action: EventActions
  ): Promise<ProcessedEvent> =>  {
    return new Promise((ress, rej) => {
      if (action === "create") {
        const newEvent = {
          title: event.title,
          start: event.start.toISOString(),
          end: event.end.toISOString(),
          userId: localStorage.getItem("user"),
        };
        axios.post("/ms-events/api/event", newEvent).then((res) => {
          const event = {
            event_id: res.data.event_id,
            title: res.data.title,
            start: new Date(res.data.start),
            end: new Date(res.data.end),
          };
          ress(event);
          // events.push(res.data);
        });
      } else if (action === "edit") {
        const editEvent = {
          event_id: event.event_id,
          title: event.title,
          start: event.start.toISOString(),
          end: event.end.toISOString(),
          userId: localStorage.getItem("id"),
        };

        axios
          .put("/ms-events/api/editEvent", editEvent)
          .then((res) => {
            const event = {
              event_id: res.data.event_id,
              title: res.data.title,
              start: new Date(res.data.start),
              end: new Date(res.data.end),
            };
            ress(event);
          });
      }
    });
  };

  const handDelete = async (event_id: string): Promise<string> =>  {
    return new Promise((ress, rej) => {
      axios
        .delete("ms-events/api/deleteEvent", {
          params: { event_id: event_id },
        })
        .then((res) => {
          ress(event_id);
        });
    });
  };

  return (
    <div className="schedulerContainer">
      <Scheduler
        view="month"
        height={500}
        getRemoteEvents={fetchRemote}
        onConfirm={handleInsert}
        onDelete={handDelete}
        draggable={dragable}
        day={null}
         week={dayParam}
      />
    </div>
  );
}
export default Events;
