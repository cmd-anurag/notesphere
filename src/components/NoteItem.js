import React from "react";
import DeleteNote from "./DeleteNote";
import EditNote from "./EditNote";

export default function NoteItem(props) {

  const { note} = props;
 
  return (
    <>
    
    <div className="col-md-3">
      <DeleteNote note={note} />
      <EditNote note={note} />
      <div className="card my-3" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{note.tag}</h6>
          <p className="card-text">
          {note.description}
          </p>
          <i data-bs-toggle="modal" data-bs-target={`#edit${note._id}`} className="mx-2 fa-solid fa-pencil"></i>
          <i data-bs-toggle="modal" data-bs-target={`#delete${note._id}`} className="mx-2 fa-solid fa-trash"></i>
        </div>
      </div>      
    </div>
    
    </>
  );
}
