import React, {useContext} from "react";
import NoteContext from '../context/notes/NoteContext'

export default function NoteItem(props) {


  const context = useContext(NoteContext);
  const {notes, setNotes} = context;
  const { note } = props;

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note._id !== id))
  }

  return (
    <div className="col-md-3">
      <div className="card my-3" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{note.tag}</h6>
          <p className="card-text">
          {note.description}
          </p>
          <i className="mx-2 fa-solid fa-pencil"></i>
          <i onClick={()=>{deleteNote(note._id)}} className="mx-2 fa-solid fa-trash"></i>
        </div>
      </div>      
    </div>
  );
}
