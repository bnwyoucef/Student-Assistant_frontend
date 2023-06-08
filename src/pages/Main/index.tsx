import * as React from 'react';
import { Component } from 'react';
import { useState, useEffect, useRef } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from '../../Api/Axios';
import "./cli.css"
import MyFile from '../../components/MyFile';

const Index=()=>{

    const [notes, setNotes] = useState([])
    const [files, setFiles] = useState([])
    const [enableNotes, setEnableNotes] = useState(false)
    const [enableFiles, setEnableFiles] = useState(false)
    const [selectedNoteId, setSelectedNoteId] = useState('')
    const [selectedFileId, setSelectedFileId] = useState('')
    const [lines, setLines] = useState([])
    const [fileType, setFileType] = useState('')
    const [studentId, setStudentId] = useState(localStorage.getItem('user'))
    const [command, setCommand] = useState('')
    const [deleteOpenBtn, setDeleteOpenBtn] = useState('')
    const textareaRef = useRef(null);

    const navigate = useNavigate()


    let myFileId = ''
    let myFileType = ''
    let myNoteId = ''

    

    const getAllNotes = async () => {

        try {
            const res = await axios.get(`ms-note/api/notes/${studentId}`)  
            
            setNotes(res.data)
        } catch (error) {

            console.log(error)

        }
    }
    
    const getAllFiles = async () => {

        try {
    
            const res = await axios.get(`ms-file/api/files/${studentId}`)
    
    
            setFiles(res.data)
    
        } catch (error) {
    
            console.log(error)
        }
      }

      useEffect(() => {
        getAllNotes()
        getAllFiles()
      }, [])

      const clearTextarea = (event) => {

        setCommand('')
        event.preventDefault()
        textareaRef.current.value = "";
      };

      useEffect(() => {

        if (command == '') {
            setEnableNotes(false)
            setEnableFiles(false)
          }

      }, [command])
      


      const onCommandChange =  async (value) => {

        getAllNotes()
        getAllFiles()

        setCommand(value)

        let words = value.split(' ')

        if (words.length != 2) {
            setEnableNotes(false)
            setEnableFiles(false)
            console.log("Command not recognized1 (client-Side)")
            return
        }

        if (words[0].toLocaleLowerCase() == "open" || words[0].toLocaleLowerCase() == "delete") {

            if (words[1].toLocaleLowerCase() == "note") {
                setEnableNotes(true)
            } else if (words[1].toLocaleLowerCase() == "file" && words[0].toLocaleLowerCase() == "open") {
                setDeleteOpenBtn('open')
                setEnableFiles(true)
            } else if (words[1].toLocaleLowerCase() == "file" && words[0].toLocaleLowerCase() == "delete") {
                setDeleteOpenBtn('delete')
                setEnableFiles(true)
            } else {
                setEnableNotes(false)
                setEnableFiles(false)
            }
            
        } else {
            setEnableNotes(false)
            setEnableFiles(false)

        }

      }

      /* console.log("lines", lines)
      console.log("command", command) */

      const handleKeyDown = async (event) => {

        

        const arrLines = [...lines]

    

        if (event.key == "Enter") {

            console.log('Enter is pressed :)')
            
           // if (command != '') {
                /* setLines((prevLines) => {
                    const newLine = [
                        ...prevLines,
                        ...command.split('\n'),
                      ]

                      console.log('new line',newLine)

                      return newLine
                }); */

                console.log(command)

                if (command == '') {
                    clearTextarea(event)
                    setLines([])
                    return
                }
                
                arrLines.push(command.split('\n'))
                setLines(arrLines)
                

                //setCommand('');
            //} else {
            //    setCommand('')
            //    return
           // }

            console.log("arrLines", arrLines)


            if (arrLines.length == 1) {


                const words = arrLines[0][0].split(' ')

                if (words.length != 2) {
                    console.log("Command not recognized2 (client-Side)")
                    clearTextarea(event)
                    setLines([])
                    return
                }

                if (words[1].toLocaleLowerCase() == "note" || words[1].toLocaleLowerCase() == "notes") {

                    if (words[0].toLocaleLowerCase() == "delete" && words[1].toLocaleLowerCase() == "note") {
    
                        if (myNoteId == null || myNoteId == '') return console.log("No note Selected")
    
                        const res = await axios.post(`ms-cli/api/cli/notes/${myNoteId}`, arrLines[0])
                        clearTextarea(event)
                        setLines([])
                        setSelectedNoteId('')
                        myNoteId = ''
                        console.log(res)
    
    
                    } else if (words[0].toLocaleLowerCase() == "get" && words[1].toLocaleLowerCase() == "notes") {
                        const res = await axios.post(`ms-cli/api/cli/notes/${studentId}`, arrLines[0])
                        clearTextarea(event)
                        setLines([])
                        navigate('/student/notes')
                        console.log(res)

                    }   else if (words[0].toLocaleLowerCase() == "add" && words[1].toLocaleLowerCase() == "note") {  // add note 
                        
                         /* const res = await axios.post(`http://localhost:8043/api/cli/notes/${studentId}`, {command: command})
                        console.log(res)  */
                    } else {
                        console.log("Command not recognized3 (client-Side)")
                        clearTextarea(event)
                        setLines([])
                    } 
    
                } else if (words[1].toLocaleLowerCase() == "file" || words[1].toLocaleLowerCase() == "files") {
    
                    if (words[0].toLocaleLowerCase() == "open" && words[1].toLocaleLowerCase() == "file") {
    
                        if (myFileId == null || myFileId == '') return console.log("No file Selected")
    
                        const res = await axios.post(`ms-cli/api/cli/files/${myFileId}`, arrLines[0], {
                            responseType: 'blob',
                          })
                        console.log(res)
                        clearTextarea(event)
                        setLines([])
                        
                        try {
    
                            const url = window.URL.createObjectURL(new Blob([res.data], { type: myFileType }));
                            window.open(url);
                            setSelectedFileId('')
                            setFileType('')
                            myFileId = ''
                            myFileType = ''
                      
                          } catch (error) {
                            console.log(error)
                          }
    
                    } else if (words[0].toLocaleLowerCase() == "delete" && words[1].toLocaleLowerCase() == "file") {
    
                        if (myFileId == null || myFileId == '') return console.log("No file Selected")
    
                        const res = await axios.post(`ms-cli/api/cli/files/${myFileId}`, arrLines[0])
                        clearTextarea(event)
                        setLines([])
                        myFileId = ''
                        myFileType = ''
                        
                        console.log(res)
    
                    } else if (words[0].toLocaleLowerCase() == "get" && words[1].toLocaleLowerCase() == "files") {
                        const res = await axios.post(`ms-cli/api/cli/files/${studentId}`, arrLines[0])
                        clearTextarea(event)
                        setLines([])
                        navigate('/student/files') 
                        console.log(res)                       

                    } else if (words[0].toLocaleLowerCase() == "get" && words[1].toLocaleLowerCase() == "file") {
                        //const res = await axios.post(`http://localhost:8043/api/cli/files/${selectedFileId}`, {command: command})
                        

                    } else {
                        console.log("Command not recognized4 (client-Side)")
                        clearTextarea(event)
                        setLines([])
                    } 


    
                } else {
                    console.log("Command not recognized5 (client-Side)")
                    clearTextarea(event)
                    setLines([])
                }  // no file/files no note/notes


            } else if (arrLines.length == 2) {

                let firstLineWords = arrLines[0][0].split(' ')
                if (firstLineWords[1].toLocaleLowerCase() == "note") {  // add note

                    //setTitle(command)
                   

                } else if (firstLineWords[1].toLocaleLowerCase() == "file") {  // open file

                    if (arrLines[1][1].toLocaleLowerCase() != "cours" && arrLines[1][1].toLocaleLowerCase() != "td" && arrLines[1][1].toLocaleLowerCase() != "tp") {
                        // search name case
                        const commandAndName = [arrLines[0][0], arrLines[1][1]]
                        const res = await axios.post(`ms-cli/api/cli/files/${studentId}`, commandAndName)
                        clearTextarea(event)
                        setLines([])
                        console.log(res)
                        navigate('/student/files', { state: { data: res.data._embedded.files } });

                    }

                }
                
            }
            else if (arrLines.length == 3) {

                let firstLineWords = arrLines[0][0].split(' ')

                if (firstLineWords[1].toLocaleLowerCase() == "note") {

                    //setBody(command)
                    const commandAndTitleAndBody = [arrLines[0][0], arrLines[1][1], arrLines[2][2]]
                    console.log(commandAndTitleAndBody)
                    const res = await axios.post(`ms-cli/api/cli/notes/${studentId}`, commandAndTitleAndBody)
                    console.log(res)
                    clearTextarea(event)
                    setLines([])

                } else if (firstLineWords[1].toLocaleLowerCase() == "file") {
                    const commandAndTypeAndName = [arrLines[0][0], arrLines[1][1], arrLines[2][2]]
                    const res = await axios.post(`ms-cli/api/cli/files/${studentId}`, commandAndTypeAndName)
                    console.log(res)
                    clearTextarea(event)
                    setLines([])
                    navigate('/student/files', { state: { data: res.data._embedded.files } });
                } else {
                    console.log("Command not recognized6 (client-Side)")
                }
            } else {

                clearTextarea(event)
                setLines([])

                console.log("Command not recognized7 (client-Side)")

            }
            

        

        }

        
      }

      const selectNote = (id) => {
        setSelectedNoteId(id)
        myNoteId = id
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
        const event = new KeyboardEvent("keydown", { key: "Enter" });
        textareaRef.current.dispatchEvent(event);
        handleKeyDown(event);

      }

      const selectFile = (id, type) => {
        setSelectedFileId(id)
        setFileType(type)
        myFileId = id
        myFileType = type
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
        const event = new KeyboardEvent("keydown", { key: "Enter" });
        textareaRef.current.dispatchEvent(event);
        handleKeyDown(event);
    
      }


    return(

        <div>

        <textarea
            placeholder="Type something..."
            className="terminal"
            value={command}
            onChange={(e) => onCommandChange(e.target.value)}
            onKeyDown= {handleKeyDown}
            ref={textareaRef}
        /> 
        
            {enableNotes == true ? (
                <div className="w-full max-w-2xl px-4">
                <div className="border rounded-lg border pb-6 border-gray-200">
                    <div className="flex items-center border-b border-gray-200 justify-between px-6 py-3">
                        <p className="text-sm lg:text-xl font-semibold leading-tight text-gray-800">Items</p>
                    </div>
                    <div className="px-6 pt-6 overflow-x-auto">
                    <table className="w-full whitespace-nowrap">
                    <tbody>
                    {notes.map((note) => {
                        return (
                            <tr>
                                <td>
                                    <p>{note.title}</p>
                                </td>
                                <td className="pl-16">
                                    <button onClick={() => selectNote(note.noteId)}>delete</button>
                                </td>
                            </tr>
                            // <div>
                            //     <span onClick={() => selectNote(note.noteId)}>{note.title}</span>
                            // </div>    
                        )
                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            ): null}

            {enableFiles == true ? ( 
                <div className="w-full max-w-2xl px-4">
                <div className="border rounded-lg border pb-6 border-gray-200">
                    <div className="flex items-center border-b border-gray-200 justify-between px-6 py-3">
                        <p className="text-sm lg:text-xl font-semibold leading-tight text-gray-800">Items</p>
                    </div>
                    <div className="px-6 pt-6 overflow-x-auto">
                    <table className="w-full whitespace-nowrap">
                    <tbody>
                    {files.map((file) => {
                        return (
                            <tr>
                                <td>
                                    <p>{file.name}</p>
                                </td>
                                <td className="pl-16">
                                    <button onClick={() => selectFile(file.fileId, file.contentType)}>{deleteOpenBtn}</button>
                                </td>
                            </tr>
                                // <div>
                                //     <span onClick={() => selectFile(file.fileId, file.contentType)}>{file.name}</span>
                                // </div>  
                        )
                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
                
            ): null}
        </div>
    )
}

export default Index