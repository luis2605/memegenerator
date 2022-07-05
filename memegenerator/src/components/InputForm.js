import React from "react";
import classes from "./inputForm.module.css";

const InputForm = (props) => {
  const textAboveChangeHandler = (event) => {
    props.onChangeTextAbove(event.target.value);
  };

  const textBelowChangeHandler = (event) => {
    props.onChangeTextBelow(event.target.value);
  };

  const changeMeme = () => {
    const memeIndex = Math.floor(Math.random() * (10 - 0) + 0);
    props.onChangeMemeIndex(memeIndex);
    console.log(memeIndex);
  };

  return (
    <div className={classes.container}>
      <form>
        <label htmlFor="input-above">
          <input
            id="input-above"
            type="text"
            placeholder=" 1. text hier eingeben"
            onChange={textAboveChangeHandler}
          ></input>
        </label>
        <label htmlFor="input-below">
          <input
            id="input-below"
            type="text"
            placeholder=" 2. text hier eingeben"
            onChange={textBelowChangeHandler}
          ></input>
        </label>
      </form>
      <button className={classes.btn} type="submit" onClick={changeMeme}>
        {" "}
        Ein neues Bild abrufen
      </button>
    </div>
  );
};

export default InputForm;
