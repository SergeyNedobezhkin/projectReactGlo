// import "./App.css";
import React from "react";
import { GlobalStyle } from "./Components/Style/GlobalStyle";
import { NavBar } from "./Components/Navbar/NavBar";
import { Menu } from "./Components/Menu/Menu";
import { ModalItem } from "./Components/Modal/ModalItem";
import { Order } from "./Components/Order/Order";
import { UseOpenItem } from "./Components/Hooks/UseOpenItem";
import { UseOrders } from "./Components/Hooks/UseOrders";

const App = () => {
  const openItem = UseOpenItem();
  const orders = UseOrders();

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Order {...orders} {...openItem} />
      <Menu {...openItem} />

      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
};

export default App;
