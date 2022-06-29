import React from "react";
import classes from "./memeProjector.module.css";
const MemeProjector = (props) => {
  console.log(props.memeIndex);

  const conditionalStyles = () => {
    /// working here to create diff styles for each meme layout
    if (props.memeIndex === 0) {
      return props.textAbove ? classes["left-white-side"] : classes.invisible;
    } else {
      return props.textAbove ? classes["text-above"] : classes.invisible;
    }
  };

  return (
    <div className={classes["memes-container"]}>
      <p className={conditionalStyles()}>{props.textAbove}</p>
      <img
        className={classes.img}
        src={props.memes.data.memes[props.memeIndex].url}
        alt="texthere"
      ></img>
      <p
        className={props.textBelow ? classes["text-below"] : classes.invisible}
      >
        {props.textBelow}{" "}
      </p>
    </div>
  );
};

export default MemeProjector;
