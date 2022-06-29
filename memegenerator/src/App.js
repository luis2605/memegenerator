import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import classes from "./App.module.css";
import InputForm from "./components/InputForm";
import MemeProjector from "./components/MemeProjector";
import memeData from "./memesData";

function App() {
  const [memes, setMemes] = useState(memeData);

  return (
    <div className={classes.app}>
      <Header />
      <InputForm />
      <MemeProjector memes={memes} />
    </div>
  );
}

export default App;
