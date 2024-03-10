
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
          'authtoken':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlODk5OTZhNGRlMThiYmNlZTY4MjgxIn0sImlhdCI6MTcwOTc0MjUwOX0.3ZxiVoxTHiPZLQeOZx80jkss0PyMabkUqDeY2pzQu4o'
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
