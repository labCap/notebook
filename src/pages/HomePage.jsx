import React from "react";

import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Notes } from "../components/Notes/Notes";

export const HomePage = () => {
  return (
    <>
      <Header />

      <main>
        <div className="container">
          <Notes />
        </div>
      </main>

      <Footer />
    </>
  );
};
