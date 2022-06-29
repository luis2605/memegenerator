import React from "react";
import classes from "./memeProjector.module.css";
const MemeProjector = (props) => {
  console.log(props);
  return (
    <div className={classes["memes-container"]}>
      <p className={classes["text-above"]}></p>
      <img
        className={classes.img}
        src={props.memes.data.memes[0].url}
        alt="texthere"
      ></img>
      <p className={classes["text-below"]}> </p>
    </div>
  );
};

export default MemeProjector;
