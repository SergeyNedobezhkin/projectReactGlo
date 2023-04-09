import React from "react";
import styled from "styled-components";

const ModalBtn = styled.button`
  width: 250px;
  height: 65px;
  margin-left: 175px;
  margin-top: 230px;
  color: white;
  background-color: #4caf50; /* Green */
  border: none;
  text-align: center;
  text-decoration: none;
`;

export const ModalButton = () => <ModalBtn>Добавить</ModalBtn>;
