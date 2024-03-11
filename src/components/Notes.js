import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import { useNavigate } from "react-router-dom";


export default function Notes(props) {
  const context = useContext(NoteContext);
  const { notes, getNotes } = context;
  let navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem('token')) {
      navigate('/login')
    }
    else {
      getNotes();
    }
    // eslint-disable-next-line
  }, []);
  

  return (
    <>
      <div className="row">
        {notes.map((note) => {
          return (
            <NoteItem showAlert={props.showAlert} key={note._id} note={note}/>
          );
        })}
      </div>
    </>
  );
}
