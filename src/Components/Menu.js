import React from "react";
import styled from "styled-components";
import dbMenu from "./DBMenu";
import { ListItem } from "./ListItem";
import { Banner } from "./Banner";

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
`;

const MenuSection = styled.section`
  padding-bottom: 40px;
`;

export const Menu = () => (
  <MenuStyled>
    <Banner />
    <MenuSection>
      <h2>Бургеры</h2>
      <ListItem itemList={dbMenu.burger}></ListItem>
    </MenuSection>
    <MenuSection>
      <h2>Закуски / напитки</h2>
      <ListItem itemList={dbMenu.other}></ListItem>
    </MenuSection>
  </MenuStyled>
);
