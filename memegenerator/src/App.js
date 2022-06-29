import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import classes from "./App.module.css";
import InputForm from "./components/InputForm";
import MemeProjector from "./components/MemeProjector";
import memeData from "./memesData";

function App() {
  const [memes, setMemes] = useState(memeData);

  const [textAbove, setTextAbove] = useState("");

  const [texBelow, setTextBelow] = useState("");

  const [memeIndex, setMemeIndex] = useState(0);

  const changeMemeIndex = (memeIndex) => {
    setMemeIndex(memeIndex);
    console.log(memeIndex);
  };

  const changeTextAbove = (textAbove) => {
    //getting data from InputForm
    setTextAbove(textAbove);
    console.log(textAbove);
  };
  const changeTextBelow = (textBelow) => {
    //getting data from InputForm
    setTextBelow(textBelow);
  };

  return (
    <div className={classes.app}>
      <Header />
      <InputForm
        onChangeTextAbove={changeTextAbove}
        onChangeTextBelow={changeTextBelow}
        onChangeMemeIndex={changeMemeIndex}
      />
      <MemeProjector
        memes={memes}
        textAbove={textAbove}
        textBelow={texBelow}
        memeIndex={memeIndex}
      />{" "}
      {/* passing data from InputForm to MemeProjector via props*/}
    </div>
  );
}

export default App;
