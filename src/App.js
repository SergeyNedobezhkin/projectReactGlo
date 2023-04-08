// import "./App.css";
import React from "react";
import { GlobalStyle } from "./Components/GlobalStyle";
import { NavBar } from "./Components/NavBar";
import { Menu } from "./Components/Menu";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />

      <Menu />
      <div className="App"></div>
    </>
  );
};

export default App;
