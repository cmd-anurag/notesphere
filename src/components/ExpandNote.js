import React from 'react'

const ExpandNote = (props) => {
  return (
    <div>
      <div className="modal fade" id={`expand${props.note._id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">{props.note.title}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p style={{fontWeight: '100', fontStyle:'italic'}}>{props.note.tag}</p>
        {props.note.description}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-info" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default ExpandNote
