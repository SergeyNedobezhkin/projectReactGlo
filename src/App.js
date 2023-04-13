// import "./App.css";
import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { GlobalStyle } from "./Components/Style/GlobalStyle";
import { NavBar } from "./Components/Navbar/NavBar";
import { Menu } from "./Components/Menu/Menu";
import { ModalItem } from "./Components/Modal/ModalItem";
import { Order } from "./Components/Order/Order";
import { UseOpenItem } from "./Components/Hooks/UseOpenItem";
import { UseOrders } from "./Components/Hooks/UseOrders";
import { useAuth } from "./Components/Hooks/useAuth";

const firebaseConfig = {
  apiKey: "AIzaSyDDM2oBlS2dxHbFL9ZFjknm6xAIxTOFq8s",
  authDomain: "mrdonaldsreact.firebaseapp.com",
  databaseURL:
    "https://mrdonaldsreact-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mrdonaldsreact",
  storageBucket: "mrdonaldsreact.appspot.com",
  messagingSenderId: "916482931818",
  appId: "1:916482931818:web:53c46a1eca464d1d695e13",
};
firebase.initializeApp(firebaseConfig);

const App = () => {
  const openItem = UseOpenItem();
  const orders = UseOrders();
  const auth = useAuth(firebase.auth);

  return (
    <>
      <GlobalStyle />
      <NavBar {...auth} />
      <Order {...orders} {...openItem} {...auth} />
      <Menu {...openItem} />

      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
};

export default App;
