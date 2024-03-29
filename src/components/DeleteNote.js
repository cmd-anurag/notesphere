import React, {useContext} from 'react'
import NoteContext from '../context/notes/NoteContext'

const DeleteNote = ({note, showAlert}) => {
    const context = useContext(NoteContext);
    const {notes, setNotes} = context;
    const host = "https://notesphere-jyst.onrender.com"
    
    const deleteNote = async (id) => {
      try {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
            'authtoken': localStorage.getItem('token')
          }
    
        })
        
        setNotes(notes.filter(note => note._id !== id));
        showAlert('success', 'Successfully Deleted the Note')
        if(response) {
            //ignore this if
        }
      }
      catch(error) {
        showAlert('danger', 'Internal Server Error. Pleae try again later.')
      }
      
      }
  return (
    
    <div>
       <div className="modal fade" id={`delete${note._id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Confirmation</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <b>Do you want to delete this note?</b><br />
        {note.title}<br />{note.description}<br />{note.tag}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Cancel</button>
        <button data-bs-dismiss="modal" onClick={()=>{deleteNote(note._id)}} type="button" className="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default DeleteNote
