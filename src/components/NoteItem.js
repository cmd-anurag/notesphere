import React from "react";

export default function NoteItem(props) {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div class="card my-3" style={{width: "18rem"}}>
        <div class="card-body">
          <h5 class="card-title">{note.title}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">{note.tag}</h6>
          <p class="card-text">
          {note.description}
          </p>
        </div>
      </div>      
    </div>
  );
}
