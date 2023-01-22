import React from "react";
import { AddNote } from "../AddNote/AddNote";
import { Note } from "../Note/Note";
import "./Notes.scss";

export const Notes = () => {
  return (
    <div className="notes">
      <Note />
      <AddNote />
    </div>
  );
};
