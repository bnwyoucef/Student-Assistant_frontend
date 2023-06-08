import React from 'react'
import UpdateNote from './UpdateNote';
import DeleteNote from './DeleteNote';

const Note = (props) => {


    function updateNote(index, newTitle, newBody, newDate) {
        props.noteUpdated(index, newTitle, newBody, newDate)
    }

    function deleteNote(index) {
        props.noteDeleted(index)
    }
  return (
    <div className="rounded">
        <div className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
            <div>
                <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">{props.note.title}</h4>
                <p className="text-gray-800 dark:text-gray-100 text-sm">{props.note.body}</p>
            </div>
            <div>
                <div className="flex items-center justify-between text-gray-800 ">
                    <p className="text-sm dark:text-gray-100">{props.note.date}</p>
                    <div className="flex items-center">
                        <UpdateNote  noteUpdated={updateNote} note={props.note} index={props.index}/>
                        <DeleteNote noteDeleted={deleteNote} noteId={props.note.noteId} index={props.index}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Note