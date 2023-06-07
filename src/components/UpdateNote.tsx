import React, {useState, useEffect} from 'react'
import axios from '../Api/Axios';

const UpdateNote = ({note}) => {
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState(note.title)
    const [details, setDetails] = useState(note.body)
    const [studentId, setStudentId] = useState(localStorage.getItem('user'))
    

    function updateNote() {
        setShowModal(false);
        try {
            //const response = await response.patch({})
            //TODO: update the note
            console.log("note updated succefully for test purpose!");
        } catch (error) {
            
        }
    }

  return (
    <>
        <div className="w-8 h-8 rounded-full bg-white text-gray-800 flex items-center justify-center cursor-pointer"
        onClick={() => setShowModal(true)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
            </svg>
        </div>
    {showModal ? (
        <>
        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                    Modify Note
                </h3>
                <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                    </span>
                </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                    <form className="w-96">
                        <div className="mb-4 mt-6">
                        <label
                            className="flex text-gray-700 text-sm font-semibold mb-2"
                            htmlFor="email"
                        >
                            Title
                        </label>
                        <input
                            className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                            required
                            id="title"
                            type="text"
                            placeholder="note title"
                            value={title}
                            onChange={event => setTitle(event.target.value)}
                        />
                        </div>
                        <div className="mb-6 mt-6">
                        <label
                            className="flex text-gray-700 text-sm font-semibold mb-2"
                            htmlFor="password"
                        >
                            Details
                        </label>
                        <input
                            className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                            required
                            id="details"
                            type="text"
                            placeholder="Note details"
                            value={details}
                            onChange={event => setDetails(event.target.value)}
                        />
                        </div>
                </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                >
                    Close
                </button>
                <button
                    className="hover:bg-yellow-300 bg-yellow-400 text-grey-darkest  font-bold uppercase text-md px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={updateNote}
                >
                    Modify
                </button>
                </div>
            </div>
            </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    ) : null}
    </>
  )
}

export default UpdateNote