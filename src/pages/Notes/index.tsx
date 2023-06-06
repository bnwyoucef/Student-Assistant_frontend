import React, { useEffect, useState } from 'react';
import Note from '../../components/Note';
import axios from '../../Api/Axios';
import PopUp from './../../components/AddNote';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    return async () => {
      try {
        const response = await axios.get('ms-notes/api/notes');
        setNotes(response.data);
      } catch (error:any) {
        setErrMsg(error.message);
      }
    }
  }, [])
  
  

  const noteList = notes.map((note, index) => {
    return <Note key={index} {...{...note,date:"Juin 03, 2023"}}/>
  });

  return (
    <div>
      <div className="px-4 md:px-10 py-4 md:py-7">
        <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Notes</p>
            <div className="mt-4 sm:mt-0">
              <PopUp />
            </div>
        </div>
      </div>
      <div className="mx-auto container py-2 px-6">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {notes.length !== 0 && noteList}
                  {notes.length === 0 && "There are no notes to display"}
          </div>
      </div>
    </div>
  )
}


export default Notes