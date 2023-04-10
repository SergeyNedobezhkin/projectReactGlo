import React from "react";
import styled from "styled-components";
import dbMenu from "../DBMenu";
import { ListItem } from "./ListItem";
import { Banner } from "../Modal/Banner";

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
  margin-left: 380px;
`;

const MenuSection = styled.section`
  padding-bottom: 40px;
  padding-left: 20px;
`;

export const Menu = ({ setOpenItem }) => (
  <MenuStyled>
    <Banner />
    <MenuSection>
      <h2>Бургеры</h2>
      <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem}></ListItem>
    </MenuSection>
    <MenuSection>
      <h2>Закуски / напитки</h2>
      <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem}></ListItem>
    </MenuSection>
  </MenuStyled>
);