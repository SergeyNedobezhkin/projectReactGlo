// import "./App.css";
import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import { GlobalStyle } from "./Components/Style/GlobalStyle";
import { NavBar } from "./Components/Navbar/NavBar";
import { Menu } from "./Components/Menu/Menu";
import { ModalItem } from "./Components/Modal/ModalItem";
import { Order } from "./Components/Order/Order";
import { useOpenItem } from "./Components/Hooks/useOpenItem";
import { useOrders } from "./Components/Hooks/useOrders";
import { useAuth } from "./Components/Hooks/useAuth";
import { useTitle } from "./Components/Hooks/useTitle";

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
  const openItem = useOpenItem();
  const orders = useOrders();
  const auth = useAuth(firebase.auth);
  useTitle(openItem.openItem);

  return (
    <>
      <GlobalStyle />
      <NavBar {...auth} />
      <Order
        {...orders}
        {...openItem}
        {...auth}
        firebaseDatabase={firebase.database}
      />
      <Menu {...openItem} />

      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
};

export default App;
