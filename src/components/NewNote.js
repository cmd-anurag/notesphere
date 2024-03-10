import React, {useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
// import Alert from './Alert'

export default function NewNote() {

const context = useContext(NoteContext)
const {notes, setNotes} = context;
 

const host = "http://localhost:5000"
  

  // Add a note
  const addNote = async () => {

    let title = window.document.getElementById('title').value
    let description = window.document.getElementById('description').value
    let tag = window.document.getElementById('tag').value

    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'authtoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlODk5OTZhNGRlMThiYmNlZTY4MjgxIn0sImlhdCI6MTcwOTc0MjUwOX0.3ZxiVoxTHiPZLQeOZx80jkss0PyMabkUqDeY2pzQu4o'
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json();
    
 
    setNotes([...notes, {"_id":json.savedNote._id,"title": title, "description": description, "tag": tag}])
    window.document.getElementById('title').value = '';
    window.document.getElementById('description').value = '';
    window.document.getElementById('tag').value = '';
  }



  return (
    <>
<button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Add a Note</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">New Note</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="col-form-label">Title</label>
            <input type="text" className="form-control" id="title" />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="col-form-label">Content:</label>
            <textarea className="form-control" id="description"></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="col-form-label">Tag:</label>
            <input autoComplete='off' type="text" className="form-control" id="tag" />
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
        <button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={addNote} type="button" className="btn btn-success">Add Note</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
