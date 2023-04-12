import React from "react";
import styled from "styled-components";
import { ModalBtn } from "./ModalBtn";
import { CountItem } from "./CountItem";
import { UseCount } from "../Hooks/UseCount";
import { TotalPriceItems } from "../Functions/secondaryFanction";
import { TotalPriceItemStyle } from "../Functions/secondaryFanction";
import { FormatCurrency } from "../Functions/secondaryFanction";
import { Toppings } from "./Toppings";
import { UseToppings } from "../Hooks/useToppings";
import { UseChoices } from "../Hooks/useChoices";
import { Choices } from "./Choices";

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  padding-top: 50px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
`;

const Modal = styled.div`
  width: 600px;
  height: 600px;
  background-color: #ffffff;
`;

const ModalBanner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
`;
const Contant = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: calc(100% - 200px);
  padding: 30px;
`;

const HeaderContant = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  font-family: "Pacifico", cursive;
  font-style: normal;
  font-weight: 700;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
  const counter = UseCount();
  const toppings = UseToppings(openItem);
  const choices = UseChoices(openItem);

  const closeModal = (e) => {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    }
  };
  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choices.choice,
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <ModalBanner img={openItem.img} />
        <Contant>
          <HeaderContant>
            <div>{openItem.name}</div>

            <div>{FormatCurrency(openItem.price)}</div>
          </HeaderContant>
          <CountItem {...counter} />

          {openItem.toppings && <Toppings {...toppings} />}
          {openItem.choices && <Choices {...choices} openItem={openItem} />}

          <TotalPriceItemStyle>
            <span>Цена:</span>
            <span>{FormatCurrency(TotalPriceItems(order))}</span>
          </TotalPriceItemStyle>

          <ModalBtn
            onClick={addToOrder}
            disabled={order.choices && !order.choice}
          >
            Добавить
          </ModalBtn>
        </Contant>
      </Modal>
    </Overlay>
  );
};
