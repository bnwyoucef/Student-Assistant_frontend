import React, { useEffect, useState } from 'react';
import Note from '../../components/Note';
import axios from '../../Api/Axios';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    return async () => {
      try {
        const response = await axios.get('notes');
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
      <div className="mx-auto container py-20 px-6">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {notes.length !== 0 && noteList}
                  {notes.length === 0 && "There are no notes to display"}
          </div>
      </div>
    </div>
  )
}


export default Notes