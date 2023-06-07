import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from '../../Api/Axios';
import MyFile from './../../components/MyFile';
import UploadFile from './../../components/UploadFile';

const Files = () => {
  const [files, setFiles] = useState([])
  const [selectedFile, setSelectedFile] = useState(null);
  const [studentId, setStudentId] = useState(localStorage.getItem('user'))
  let { state } = useLocation();
  
  const getFiles = async () => {
    try {
        const res = await axios.get(`ms-file/api/files/${studentId}`)
        console.log(res.data)
        setFiles(res.data)
    } catch (error) {
        console.log(error)
    }
  }


  useEffect(() => {
    if (state != null) {
      setFiles(state.data)
      window.history.replaceState(null, document.title)  // to clear the state
    }
    else getFiles()
  }, [])
  
  const handleUpload = async () => {
    const file = event.target.files[0];
    console.log("the selected file is:",file);
    setSelectedFile(file);
    if (file) {
        const formData = new FormData();
        formData.append('file', file);
       try {
            const res = await axios.post(`ms-file/api/files/upload/${studentId}`, formData ,{
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              })
            console.log(res.data)
            const arr = [...files]
            arr.push(res.data)
            setFiles(arr)
            setSelectedFile(null);
        } catch (error) {
            console.log(error.response.data)
        } 
    }
  };

  const openFile = async (fileId, type) => {

    const response = await axios.get(`ms-file/api/files/download/${fileId}`, {
        responseType: 'blob',
      });
    
    try {

      const url = window.URL.createObjectURL(new Blob([response.data], { type: type }));
      window.open(url);

    } catch (error) {
      console.log(error)
    }
  }

  const downloadFile = async (fileId, fileName) => {
    try {
      const response = await axios.get(`ms-file/api/files/download/${fileId}`, {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click(); 
      link.remove();
    } catch (error) {
      console.error('Failed to download file:', error);
    }
  };

  const deleteFile = async (id) => {

    try {

      const res = await axios.post(`ms-file/api/files/delete/${id}`)

      const updatedFiles = files.filter((file) => file.fileId !== id);
    setFiles(updatedFiles);
    } catch (error) {
      console.log(error.response.data)
    }

  };

  const fileList = files.map((myFile, index) => {
    return <MyFile key={index} {...{...myFile}} 
    onClick={() => openFile(myFile.fileId, myFile.contentType)}
    downloadMyFile={downloadFile}
    deleteMyFile={deleteFile}/>
  });

  return (
    <>
      <div className="xl:w-3/4 2xl:w-4/5 w-full">
          <div className="px-4 md:px-10 py-4 md:py-7">
              <div className="sm:flex items-center justify-between">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Files</p>
                  <div className="mt-4 sm:mt-0">
                    <form class="flex items-center space-x-6">
                      <label class="block">
                          <input type="file" class="block w-full text-sm text-gray-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-yellow-200 file:text-yellow-700
                          hover:file:bg-yellow-300"
                          onChange={handleUpload}
                          /> 
                      </label>
                    </form>
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