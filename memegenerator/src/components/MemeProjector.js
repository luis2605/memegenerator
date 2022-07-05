import React from "react";
import classes from "./memeProjector.module.css";
const MemeProjector = (props) => {
  console.log(props.memeIndex);
  const conditionalStylesTextContainer = () => {
    if (
      props.memeIndex === 0 ||
      props.memeIndex === 1 ||
      props.memeIndex === 2 ||
      props.memeIndex === 5 ||
      props.memeIndex === 4 ||
      props.memeIndex === 3 ||
      props.memeIndex === 6 ||
      props.memeIndex === 7 ||
      props.memeIndex === 8
    ) {
      return props.textAbove
        ? classes.textContainerMeme0
        : classes.textContainer;
    } else {
    }
  };
  const conditionalStylesInput1 = () => {
    /// working here to create diff styles for each meme layout
    if (props.memeIndex === 0) {
      return props.textAbove ? classes.meme0Input1 : classes.invisible;
    } else if (props.memeIndex === 1) {
      return props.textAbove ? classes.meme1Input1 : classes.invisible;
    } else if (props.memeIndex === 2) {
      return props.textAbove ? classes.meme2Input1 : classes.invisible;
    } else if (props.memeIndex === 5) {
      return props.textAbove ? classes.meme5Input1 : classes.invisible;
    } else if (props.memeIndex === 4) {
      return props.textAbove ? classes.meme4Input1 : classes.invisible;
    } else if (props.memeIndex === 3) {
      return props.textAbove ? classes.meme3Input1 : classes.invisible;
    } else if (props.memeIndex === 6) {
      return props.textAbove ? classes.meme6Input1 : classes.invisible;
    } else if (props.memeIndex === 7) {
      return props.textAbove ? classes.meme7Input1 : classes.invisible;
    } else if (props.memeIndex === 8) {
      return props.textAbove ? classes.meme8Input1 : classes.invisible;
    }
  };
  const conditionalStylesInput2 = () => {
    if (props.memeIndex === 0) {
      return props.textBelow ? classes.meme0Input2 : classes.invisible;
    } else if (props.memeIndex === 1) {
      return props.textBelow ? classes.meme1Input2 : classes.invisible;
    } else if (props.memeIndex === 2) {
      return props.textBelow ? classes.meme2Input2 : classes.invisible;
    } else if (props.memeIndex === 4) {
      return props.textBelow ? classes.meme4Input2 : classes.invisible;
    } else if (props.memeIndex === 3) {
      return props.textBelow ? classes.meme3Input2 : classes.invisible;
    } else if (props.memeIndex === 6) {
      return props.textBelow ? classes.meme6Input2 : classes.invisible;
    } else if (props.memeIndex === 8) {
      return props.textBelow ? classes.meme8Input2 : classes.invisible;
    } else return classes.invisible;
  };
  const randomMeme = props.memes.data.memes[props.memeIndex].url;

  return (
    <div className={classes["memes-container"]}>
      <div className={conditionalStylesTextContainer()}>
        {" "}
        <p className={conditionalStylesInput1()}>{props.textAbove}</p>{" "}
        <p className={conditionalStylesInput2()}>{props.textBelow} </p>
      </div>

      <img className={classes.img} src={randomMeme} alt={props.memeIndex}></img>
    </div>
  );
};

export default MemeProjector;
