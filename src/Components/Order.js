import React from "react";
import styled from "styled-components";
import { ModalBtn } from "./ModalBtn";
import { OrderListItem } from "./OrderListItem";

const OrderStyled = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 80px;
  left: 0;
  background: #fff;
  min-width: 380px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 25);
  padding: 20px;
`;

const OrderTitle = styled.h2`
  text-align: center;
  font-size: 40px;
  margin-bottom: 30px;
`;

const OrderContant = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul``;

const Total = styled.div`
  display: flex;
  margin-bottom: 30px;
  & span:first-child {
    flex-grow: 1;
  }
`;

const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 20px;
`;

export const Order = () => {
  return (
    <>
      <OrderStyled>
        <OrderTitle>Ваш заказ</OrderTitle>
        <OrderContant>
          <OrderList>
            <OrderListItem></OrderListItem>
            <OrderListItem></OrderListItem>
          </OrderList>
        </OrderContant>
        <Total>
          <span>Итого</span>
          <span>5</span>
          <TotalPrice>850 р</TotalPrice>
        </Total>
        <ModalBtn>Оформить</ModalBtn>
      </OrderStyled>
    </>
  );
};