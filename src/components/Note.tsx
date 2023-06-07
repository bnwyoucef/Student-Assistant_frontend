import React from 'react'

const Note = ({title, body, date}) => {
  return (
    <div className="rounded">
        <div className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
            <div>
                <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">{title}</h4>
                <p className="text-gray-800 dark:text-gray-100 text-sm">{body}</p>
            </div>
            <div>
                <div className="flex items-center justify-end text-gray-800 dark:text-gray-100">
                    <p className="text-sm">{date}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Note