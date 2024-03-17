import React from "react";
import DeleteNote from "./DeleteNote";
import EditNote from "./EditNote";
import ExpandNote from "./ExpandNote";

export default function NoteItem(props) {

  const { note, showAlert} = props;
  const length = note.description.length;
 
  return (
    <>
    <div className="col-md-3">
      <DeleteNote showAlert={showAlert} note={note} />
      <EditNote showAlert={showAlert} note={note} />
      <ExpandNote note={note} />
      <div className="card" style={{minWidth: "18rem"}}>
        <div className=" card-body">
          <div data-bs-toggle="modal" data-bs-target={`#expand${note._id}`}>
          <h5 className="card-title">{note.title}</h5>
          <h6 className="card-subtitle  my-2 mb-2 text-body-secondary">{note.tag}</h6>
          <p className="card-text  my-2">
          {length>100?note.description.slice(0, 100)+'....':note.description}
          </p>
          </div>
          <div>
          <i data-bs-toggle="modal" data-bs-target={`#edit${note._id}`} className="mx-2 my-1 fa-solid fa-pen-to-square"></i>
          <i data-bs-toggle="modal" data-bs-target={`#delete${note._id}`} className="mx-2 my-1 fa-solid fa-trash"></i>
          </div>
        </div>
      </div>      
    </div>
    
    </>
  );
}
