import React, {useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'

export default function NewNote(props) {

const context = useContext(NoteContext)
const {notes, setNotes} = context;
 

const host = "https://notesphere-jyst.onrender.com";
  
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tag, setTag] = useState('');
  // Add a note
  const addNote = async () => {
    try {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'authtoken': localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json();
 
    setNotes([...notes, {"_id":json.savedNote._id,"title": title, "description": description, "tag": tag}])
    
    setTitle('');
    setDescription('');
    setTag('');
    props.showAlert('success', 'Successfully Added a New Note');
  }
  catch(error) {
    props.showAlert('danger', 'Internal Server Error. Please try again later');
  }
  }



  return (
    <>
<button type="button" className="addnote btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Add a Note</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">New Note</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3 form-floating">
            <input placeholder='Add a title' value={title} onChange={e=>{setTitle(e.target.value)}} type="text" className="form-control" id="title" />
            <label htmlFor="title" className="col-form-label">Title</label>
          </div>
          <div className="mb-3 form-floating">
            <textarea style={{height: '180px'}} placeholder='Write some content' value={description} onChange={e=>{setDescription(e.target.value)}} className="form-control" id="description"></textarea>
            <label htmlFor="description" className="col-form-label">Content</label>
          </div>
          <div className="mb-3 form-floating">
            <input placeholder='Specify some tags' value={tag} onChange={e=>{setTag(e.target.value)}} autoComplete='off' type="text" className="form-control" id="tag" />
            <label htmlFor="description" className="col-form-label">Tags</label>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
        <button disabled={title.length>0?false:true} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={addNote} type="button" className="btn btn-success">Add Note</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
