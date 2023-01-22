import React from "react";
import { FaTrash } from "react-icons/fa";

import "./Note.scss";

export const Note = () => {
  return (
    <div className="note">
      <h2 className="note__title">title</h2>
      <p className="note__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        porro!
      </p>
      <div className="note__footer">
        <div className="date">01/01/0001</div>
        <FaTrash className="trash-btn" />
      </div>
    </div>
  );
};
