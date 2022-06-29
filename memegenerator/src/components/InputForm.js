import React from "react";
import classes from "./inputForm.module.css";

const InputForm = () => {
  return (
    <div className={classes.container}>
      <form>
        <label htmlFor="input-above">
          <input
            id="input-above"
            type="text"
            placeholder=" 1. text hier eingeben"
          ></input>
        </label>
        <label htmlFor="input-below">
          <input
            id="input-below"
            type="text"
            placeholder=" 2. text hier eingeben"
          ></input>
        </label>
      </form>
      <button className={classes.btn} type="submit">
        {" "}
        Ein neues Bild abrufen 🖼
      </button>
    </div>
  );
};

export default InputForm;
