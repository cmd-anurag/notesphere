import React, { useState } from 'react'

export default function NewNote() {

    
const [modal, setModal] = useState(false);

  const showAddNote = (event) => {
    setModal(true);
    
  }
  const hideAddNote = (event) => {
    setModal(false);
  }
  return (
    <div>
        
<button onClick={showAddNote} type="button" className="btn btn-success">Add New Note</button>
{modal &&
<div className='test'>
<div className="modal-open fade show" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">New Note</h5>
      </div>
      <div className="modal-body">
        <form>
          <div className="form-group">
            <label htmlFor="title" className="col-form-label">Title</label>
            <input type="text" className="form-control" id="title" />
          </div>
          <div className="form-group">
            <label htmlFor="message-text" className="col-form-label">Content:</label>
            <textarea className="form-control" id="message-text"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="tag" className="col-form-label">Tag</label>
            <input type="text" className="form-control" id="tag" />
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button onClick={hideAddNote} type="button" className="btn btn-warning mx-2 my-3" data-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-success mx-2 my-2">Add Note</button>
      </div>
    </div>
  </div>
</div></div>}
    </div>
  )
}
