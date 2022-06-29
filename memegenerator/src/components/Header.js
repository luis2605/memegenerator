import React from "react";
import classes from "./header.module.css";
import trollFace from "../images/Troll Face (1).png";

const Header = (props) => {
  return (
    <div className={classes["header-container"]}>
      <div className={classes["header-left"]}>
        <img className={classes.logo} src={trollFace} alt="logo"></img>
        <h1 className={classes.titel}>Meme Generator</h1>
      </div>
      <div className={classes["header-right"]}>Scrimba React Project</div>
    </div>
  );
};

export default Header;
