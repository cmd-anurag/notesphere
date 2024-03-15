import React from "react";
import DeleteNote from "./DeleteNote";
import EditNote from "./EditNote";

export default function NoteItem(props) {

  const { note, showAlert} = props;
 
  return (
    <>
    
    <div className="col-md-3">
      <DeleteNote showAlert={showAlert} note={note} />
      <EditNote showAlert={showAlert} note={note} />
      <div className="card" style={{minWidth: "18rem"}}>
        <div className=" card-body">
          <h5 className="card-title">{note.title}</h5>
          <h6 className="card-subtitle  my-2 mb-2 text-body-secondary">{note.tag}</h6>
          <p className="card-text  my-2">
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
