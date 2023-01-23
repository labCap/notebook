import React from "react";
import { FaTrash } from "react-icons/fa";

import "./Note.scss";

export const Note = ({ id, title, description, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <h2 className="note__title">{title}</h2>
      <p className="note__description">{description}</p>
      <div className="note__footer">
        <div className="date">{date}</div>
        <FaTrash className="trash-btn" onClick={() => handleDeleteNote(id)} />
      </div>
    </div>
  );
};
