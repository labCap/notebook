import React from "react";
import { AddNote } from "../AddNote/AddNote";
import { Note } from "../Note/Note";
import "./Notes.scss";

export const Notes = ({ notes, handleDeleteNote }) => {
  return (
    <div className="notes">
      {notes.map(({ id, title, description, date }) => (
        <Note
          key={id}
          id={id}
          title={title}
          description={description}
          date={date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote />
    </div>
  );
};
