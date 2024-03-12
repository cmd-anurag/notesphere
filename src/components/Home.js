import React, {useContext} from 'react'
import NewNote from './NewNote'
import Notes from './Notes'
import Spinner from './Spinner'
import LoadingContext from '../context/LoadingContext'
import NoteContext from '../context/notes/NoteContext'

export default function Home(props) {
  const {notes} = useContext(NoteContext)
  const loadingcontext = useContext(LoadingContext);
  const {loading} = loadingcontext;
  
  return (
    <>
    

    <div className='container'>
      
      <h1 className='heading my-4'>NoteSphere</h1>
      <NewNote showAlert={props.showAlert} />
      {loading && <Spinner message="Hold on...Loading your notes"/>}
      {loading? <Spinner /> : notes.length===0?<p className='my-4'>No Notes to Display, Add a note by clicking the <em>Add Note</em> button</p>: <h2 className='my-4'>Your Notes</h2>}
      <Notes showAlert={props.showAlert} />
    </div>
    </>
  )
}
