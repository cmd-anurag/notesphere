
import { useState, useContext } from 'react'
import NoteContext from './NoteContext'
import LoadingContext from '../LoadingContext';


const NoteState = (props) => {

  const loadingcontext = useContext(LoadingContext);
  const {setLoading} = loadingcontext; 


  const notesInitial = []
  const[notes, setNotes] = useState(notesInitial);
  const getNotes = async()=> {
    setLoading(true);
      const response = await fetch('https://notesphere-jyst.onrender.com/api/notes/fetchallnotes/', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'authtoken': localStorage.getItem('token')
        },
      })
      const json = await response.json();
      setNotes(json.notes);
      setLoading(false);
    }

    

    return (
        <NoteContext.Provider value={{notes, getNotes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState
