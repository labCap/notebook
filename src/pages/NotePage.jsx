import React from "react";

import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NotePage = () => {
  return (
    <>
      <Header />

      <main>
        <div className="container">
          <Link to="/">
            <FaArrowLeft className="back-btn" />
          </Link>

          <form className="note-form">
            <input type="text" placeholder="Title" className="input-title" />
            <textarea placeholder="Description"></textarea>
            <button className="btn">Add</button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
};
