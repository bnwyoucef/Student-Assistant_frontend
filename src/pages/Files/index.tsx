import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MyFile from './../../components/MyFile';

const Files = () => {
  const [files, setFiles] = useState([1,2,3,4,5,6])
  useEffect(() => {
    return async () => {
      try {
        //fetch the files and set it to the files array
      } catch (error:any) {
        //setErrMsg(error.message);
      }
    }
  }, [])

  const fileList = files.map((myFile, index) => {
    return <MyFile key={index} />
  });

  return (
    <>
      <div className="xl:w-3/4 2xl:w-4/5 w-full">
          <div className="px-4 md:px-10 py-4 md:py-7">
              <div className="sm:flex items-center justify-between">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Files</p>
                  <div className="mt-4 sm:mt-0">
                      <button className="text-grey-darkest font-bold inline-flex sm:ml-3 items-start justify-start px-6 py-3 bg-yellow-400 hover:bg-yellow-300 focus:outline-none rounded">
                          <p className="leading-none">Download All</p>
                      </button>
                  </div>
              </div>
          </div>
          <div className="bg-white px-4 md:px-10 pb-5">
              <div className="overflow-x-auto">
                  <table className="w-full whitespace-nowrap">
                      <tbody>
                        {fileList}
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
    </>
  )
}

export default Files