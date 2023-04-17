import React, { useContext } from "react";
import styled from "styled-components";
import { ModalBtn } from "../Modal/ModalBtn";
import { OrderListItem } from "./OrderListItem";
import { TotalPriceItems } from "../Functions/secondaryFanction";
import { FormatCurrency } from "../Functions/secondaryFanction";
import { Context } from "../Functions/context";

const OrderStyled = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 80px;
  left: 0;
  background: #fff;
  width: 380px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 25);
  padding: 20px;
`;

export const OrderTitle = styled.h2`
  text-align: center;
  font-size: 40px;
  margin-bottom: 30px;
`;

const OrderContant = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul``;

export const Total = styled.div`
  display: flex;
  margin-bottom: 30px;
  & span:first-child {
    flex-grow: 1;
  }
`;

export const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 20px;
`;

const EmptyList = styled.p`
  text-align: center;
  cursor: pointer;
`;

export const Order = () => {
  const {
    auth: { authentication, logIn },
    orders: { orders, setOrders },
    orderConfirm: { setOpenOrderConfirm },
  } = useContext(Context);

  const total = orders.reduce(
    (result, order) => TotalPriceItems(order) + result,
    0
  );
  const totalCounter = orders.reduce(
    (result, order) => order.count + result,
    0
  );

  const deleteItem = (index) => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  };

  return (
    <>
      <OrderStyled>
        <OrderTitle>Ваш заказ</OrderTitle>

        <OrderContant>
          {orders.length ? (
            <OrderList>
              {orders.map((order, index) => (
                <OrderListItem
                  key={index}
                  order={order}
                  deleteItem={deleteItem}
                  index={index}
                />
              ))}
            </OrderList>
          ) : (
            <EmptyList>Список заказов пуст!</EmptyList>
          )}
        </OrderContant>
        {orders.length ? (
          <>
            <Total>
              <span>Итого</span>
              <span>{totalCounter}</span>
              <TotalPrice>{FormatCurrency(total)}</TotalPrice>
            </Total>
            <ModalBtn
              onClick={() => {
                if (authentication) {
                  setOpenOrderConfirm(true);
                } else {
                  logIn();
                }
              }}
            >
              Оформить
            </ModalBtn>
          </>
        ) : null}
      </OrderStyled>
    </>
  );
};
