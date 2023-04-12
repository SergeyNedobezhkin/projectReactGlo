import styled from "styled-components";

export const ModalBtn = styled.button`
  margin: 0 auto;
  display: block;
  width: 250px;
  height: 65px;
  font-size: inherit;
  font-family: inherit;
  color: white;
  background-color: #299b01;
  border-color: transparent;
  text-align: center;
  text-decoration: none;
  &:hover {
    background-color: #b8c0b8;
    color: #299b01;
    border-color: #299b01;
    border: none;
    &:disabled {
      color: #bbb;
      background-color: #ccc;
      border-color: #aaa;
    }
  }
`;
