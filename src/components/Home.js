import React, { useContext } from 'react'
import NewNote from './NewNote'
import Notes from './Notes'

export default function Home(props) {
  
  return (
    <>
    

    <div className='container'>
      <h1 className='heading my-4'>NoteSphere</h1>
      <NewNote showAlert={props.showAlert} />
      <h3 className='my-4'>Your Notes</h3>
      <Notes showAlert={props.showAlert} />
    </div>
    </>
  )
}
