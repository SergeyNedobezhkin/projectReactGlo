import React, { useContext } from "react";
import styled from "styled-components";
import { Overlay } from "../Modal/ModalItem";
import { OrderTitle } from "./Order";
import { Total } from "./Order";
import { TotalPrice } from "./Order";
import { ModalBtn } from "../Modal/ModalBtn";
import { projection } from "../Functions/secondaryFanction";
import { TotalPriceItems } from "../Functions/secondaryFanction";
import { FormatCurrency } from "../Functions/secondaryFanction";
import { Context } from "../Functions/context";

const Modal = styled.div`
  background-color: white;
  width: 600px;
  padding: 30px;
`;

const Text = styled.h3`
  text-align: center;
  margin-bottom: 30px;
`;

const rulesData = {
  itemName: ["name"],
  price: ["price"],
  count: ["count"],
  topping: [
    "topping",
    (arr) => arr.filter((obj) => obj.checked).map((obj) => obj.name),
    (arr) => (arr.length ? arr : "no topping"),
  ],
  choice: ["choice", (item) => (item ? item : "no choices")],
};

const sendOrder = (dataBase, orders, authentication) => {
  const newOrder = orders.map(projection(rulesData));
  dataBase.ref("orders").push().set({
    nameClient: authentication.displayName,
    email: authentication.email,
    order: newOrder,
  });
};

export const OrderConfirm = () => {
  const {
    orders: { orders, setOrders },
    auth: { authentication },
    orderConfirm: { setOpenOrderConfirm },
    firebaseDatabase,
  } = useContext(Context);

  const dataBase = firebaseDatabase();
  const total = orders.reduce(
    (result, order) => TotalPriceItems(order) + result,
    0
  );

  return (
    <Overlay>
      <Modal>
        <OrderTitle>{authentication.displayName}</OrderTitle>
        <Text>Осталось только подтвердить заказ!</Text>
        <Total>
          <span>Итого:</span>

          <TotalPrice>{FormatCurrency(total)}</TotalPrice>
        </Total>
        <ModalBtn
          onClick={() => {
            sendOrder(dataBase, orders, authentication);
            setOrders([]);
            setOpenOrderConfirm(false);
          }}
        >
          Подтвердить
        </ModalBtn>
      </Modal>
    </Overlay>
  );
};
