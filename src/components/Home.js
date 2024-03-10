import React, { useContext } from 'react'
import NewNote from './NewNote'
import Notes from './Notes'

export default function Home() {
  
  return (
    <>
    

    <div className='container'>
      <h1 className='my-4'>NoteSphere</h1>
      <NewNote />
      <h3 className='my-4'>Your Notes</h3>
      <Notes />
    </div>
    </>
  )
}
