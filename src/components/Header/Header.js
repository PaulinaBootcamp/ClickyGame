import React from "react";
import "./Header.css";

const Header = props => (

  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      <button type="button" class="btn btn-primary">Highscore: <span class="badge">{props.highscore}</span></button>
      <button type="button" class="btn btn-primary">Score: <span class="badge">{props.score}</span></button>


    </div>
  </div>
);

export default Header;
