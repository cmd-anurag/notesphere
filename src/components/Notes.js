import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";


export default function Notes() {
  const context = useContext(NoteContext);
  const { notes, getNotes } = context;

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);
  

  return (
    <>
      <div className="row">
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} note={note}/>
          );
        })}
      </div>
    </>
  );
}
