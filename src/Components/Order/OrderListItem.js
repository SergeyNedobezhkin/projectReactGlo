import React, { useContext } from "react";
import styled from "styled-components";
import trashImg from "../../image/trash.svg";
import { TotalPriceItems } from "../Functions/secondaryFanction";
import { FormatCurrency } from "../Functions/secondaryFanction";
import { Context } from "../Functions/context";

const TrashBtn = styled.button`
  width: 23.51px;
  height: 24px;
  border-color: transparent;
  background-color: transparent;
  background-image: url(${trashImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;
const OrderItemStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
  cursor: pointer;
`;
const ItemName = styled.span`
  flex-grow: 1;
`;
const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`;
const ToppingName = styled.div`
  width: 100%;
  color: #9a9a9a;
  font-size: 14px;
`;

export const OrderListItem = ({ order, index, deleteItem }) => {
  const {
    openItem: { setOpenItem },
  } = useContext(Context);

  const topping = order.topping
    .filter((item) => item.checked)
    .map((item) => item.name)
    .join(", ");

  return (
    <OrderItemStyled onClick={() => setOpenItem({ ...order, index })}>
      <ItemName>
        {order.name} {order.choice}
      </ItemName>
      <span>{order.count}</span>

      <ItemPrice>{FormatCurrency(TotalPriceItems(order))}</ItemPrice>
      <TrashBtn
        onClick={(e) => {
          e.stopPropagation();
          deleteItem(index);
        }}
      />
      {topping && <ToppingName>Допы: {topping} </ToppingName>}
    </OrderItemStyled>
  );
};
