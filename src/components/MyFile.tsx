import React from 'react'

const MyFile = () => {
  return (
    <tr className="text-sm leading-none text-gray-600 h-16 cursor-pointer">
        <td className="w-1/2">
            <div className="flex items-center">
                <div className="w-10 h-10 bg-red-500 rounded-sm flex items-center justify-center">
                    <p className="text-xs font-bold leading-3 text-white">PDF</p>
                </div>
                <div className="pl-2">
                    <p className="text-sm font-medium leading-none text-gray-800">file_name.pdf</p>
                </div>
            </div>
        </td>
        <td>
            <button className="bg-grey-light text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center hover:bg-yellow-200">
                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
                </svg>
                <span>Download</span>
            </button>
        </td>
        <td>
            <button className="bg-grey-light text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center hover:bg-red-500 hover:text-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
                    <span>remove</span>
            </button>
        </td>
    </tr>
  )
}

export default MyFile