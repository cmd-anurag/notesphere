
import { useState } from 'react'
import NoteContext from './NoteContext'


const NoteState = (props) => {

  

  const notesInitial = []
  const[notes, setNotes] = useState(notesInitial);
  const getNotes = async()=> {
      const response = await fetch('http://localhost:5000/api/notes/fetchallnotes/', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'authtoken': localStorage.getItem('token')
        },
      })
      const json = await response.json();
      setNotes(json.notes);
    }

    

    return (
        <NoteContext.Provider value={{notes, getNotes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState
