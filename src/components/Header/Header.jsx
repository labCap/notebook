import React from "react";
import { Logo } from "../Logo/Logo";
import "./Header.scss";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner">
          <Logo />
        </div>
      </div>
    </header>
  );
};
