import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { nanoid } from "nanoid";
import { HomePage } from "./pages/HomePage";
import { NotePage } from "./pages/NotePage";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, harum?",
      date: "01/01/0000",
    },
    {
      id: nanoid(),
      title: "title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, harum?",
      date: "01/01/0001",
    },
    {
      id: nanoid(),
      title: "title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, harum?",
      date: "01/01/0001",
    },
  ]);

  const addNote = (title, description) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      date: date.toLocaleDateString(),
      description: description,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    console.log(notes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <Router>
      <div className="wrapper">
        <Routes>
          <Route
            path="/"
            element={<HomePage notes={notes} handleDeleteNote={deleteNote} />}
          />
          <Route path="/note" element={<NotePage handleAddNote={addNote} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
