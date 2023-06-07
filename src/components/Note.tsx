import React from 'react'
import UpdateNote from './UpdateNote';
import DeleteNote from './DeleteNote';

const Note = ({noteId,title, body, date}) => {

    function updateNote(id:number) {
        console.log('update note with id:', noteId);
    }
  return (
    <div className="rounded">
        <div className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
            <div>
                <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">{title}</h4>
                <p className="text-gray-800 dark:text-gray-100 text-sm">{body}</p>
            </div>
            <div>
                <div className="flex items-center justify-between text-gray-800 ">
                    <p className="text-sm dark:text-gray-100">March 28, 2020</p>
                    <div className="flex items-center">
                        <UpdateNote note={{noteId,title, body}}/>
                        <DeleteNote/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Note