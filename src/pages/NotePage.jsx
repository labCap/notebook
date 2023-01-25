import React, { useState } from "react";

import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NotePage = ({ handleAddNote }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");

  const handleChangeTitle = (event) => {
    setNoteTitle(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setNoteDescription(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSaveClick = () => {
    if (noteDescription.trim().length > 0) {
      handleAddNote(noteTitle, noteDescription);
      setNoteDescription("");
    }
  };
  return (
    <>
      <Header />

      <main>
        <div className="container">
          <Link to="/">
            <FaArrowLeft className="back-btn" />
          </Link>

          <form className="note-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              className="input-title"
              value={noteTitle}
              onChange={handleChangeTitle}
            />
            <textarea
              placeholder="Description"
              value={noteDescription}
              onChange={handleChangeDescription}
            ></textarea>
            <Link to={"/"} className="btn" onClick={handleSaveClick}>
              Add
            </Link>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
};
