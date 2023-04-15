import React from "react";
import styled from "styled-components";

import { ListItem } from "./ListItem";
import { Banner } from "../Modal/Banner";

import { useFetch } from "../Hooks/useFetch";
import { Loading } from "../Modal/Loading";

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
  margin-left: 380px;
`;

const MenuSection = styled.section`
  padding-bottom: 40px;
  padding-left: 20px;
`;

export const Menu = ({ setOpenItem }) => {
  const res = useFetch();
  const dbMenu = res.response;

  return (
    <MenuStyled>
      <Banner />
      {res.response ? (
        <>
          <MenuSection>
            <h2>Бургеры</h2>
            <ListItem
              itemList={dbMenu.burger}
              setOpenItem={setOpenItem}
            ></ListItem>
          </MenuSection>
          <MenuSection>
            <h2>Закуски / напитки</h2>
            <ListItem
              itemList={dbMenu.other}
              setOpenItem={setOpenItem}
            ></ListItem>
          </MenuSection>
        </>
      ) : res.error ? (
        <div>Sorry, we will fix it soon...</div>
      ) : (
        <Loading />
      )}
    </MenuStyled>
  );
};
