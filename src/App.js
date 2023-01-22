import React from "react";
import { FaTrash } from "react-icons/fa";

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="container">
          <div className="inner">
            <div className="logo">NoteBook</div>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <div className="notes">
            <div className="note">
              <h2 className="note__title">title</h2>
              <p className="note__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, porro!
              </p>
              <div className="note__footer">
                <div className="date">01/01/0001</div>
                <FaTrash className="trash-btn" />
              </div>
            </div>

            <div className="note">
              <h2 className="note__title">title</h2>
              <p className="note__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, porro!
              </p>
              <div className="note__footer">
                <div className="date">01/01/0001</div>
                <FaTrash className="trash-btn" />
              </div>
            </div>

            <div className="note">
              <h2 className="note__title">title</h2>
              <p className="note__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, porro!
              </p>
              <div className="note__footer">
                <div className="date">01/01/0001</div>
                <FaTrash className="trash-btn" />
              </div>
            </div>

            <div className="add-note note"></div>
          </div>
        </div>
      </main>

      <footer>
        <footer>
          <div className="container">
            <div className="inner">
              <div className="powered">
                Powered by
                <a href="https://github.com/labCap" target="_blank">
                  labCap
                </a>
              </div>
            </div>
          </div>
        </footer>
      </footer>
    </div>
  );
}

export default App;
