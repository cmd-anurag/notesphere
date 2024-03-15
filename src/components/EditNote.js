import React, { useState, useContext, useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";

const EditNote = ({ note, showAlert }) => {
  
  const host = "https://notesphere-jyst.onrender.com";
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;

  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);
  const [tag, setTag] = useState(note.tag);

  let ititle = note.title;
  let idescription = note.description;
  let itag = note.tag;

  const handleCancel = () => {
    setTitle(ititle);
    setDescription(idescription);
    setTag(itag);
  }

  useEffect(() => {
    setTitle(note.title);
    setDescription(note.description);
    setTag(note.tag);
  }, [note]);
  
  const editNote = async (id, title, description, tag) => {
    try {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        "authtoken":localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag}),
    });
    const json = await response.json();
    setNotes(notes.map(note => note._id === id? json : note))
    if(json) {
      showAlert('success', "Successfully Updated the Note");
    }
  }
  catch(error) {
    showAlert('danger', 'An Internal Server Error Occured. Please try again later');
  }
    
  };
  return (
    <div>
      <div
        className="modal fade"
        id={`edit${note._id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                <label htmlFor="title" className="col-form-label">
                    Title
                  </label>
                  <input
                    onChange={e=>setTitle(e.target.value)}
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                  />
                  
                </div>
                <div className="mb-3">
                <label htmlFor="description" className="col-form-label">
                    Content
                  </label>
                  <textarea
                  style={{height: '180px'}}
                    onChange={e=>setDescription(e.target.value)}
                    value={description}
                    className="form-control"
                    id="description"
                  ></textarea>
                  
                </div>
                <div className="mb-3">
                <label htmlFor="description" className="col-form-label">
                    Tags
                  </label>
                  <input
                  onChange={e=>setTag(e.target.value)}
                    value={tag}
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    id="tag"
                  />
                  
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-bs-dismiss="modal"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                disabled={title.length>0?false:true}
                data-bs-dismiss="modal"
                onClick={() => {
                  editNote(note._id, title, description, tag);
                }}
                type="button"
                className="btn btn-success"
              >
                Save Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNote;
