// import "./App.css";
import React from "react";
import { GlobalStyle } from "./Components/GlobalStyle";
import { NavBar } from "./Components/NavBar";
import { Menu } from "./Components/Menu";

const App = () => {
  const [openItem, setOpenItem] = React.useState("");

  console.log("item", openItem);

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Menu setOpenItem={setOpenItem} />
    </>
  );
};

export default App;
