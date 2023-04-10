import styled from "styled-components";

export const TotalPriceItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TotalPriceItems = (order) => {
  return order.price * order.count;
};
export const FormatCurrency = (num) => {
  return num.toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
  });
};
