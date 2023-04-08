import React from "react";
import styled from "styled-components";
import logoImg from "../image/logo.svg";
import signImgBtn from "../image/sign.svg";

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299b01;
  color: white;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
`;
const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const NavBtnLogin = styled.button`
  font-size: 16px;
  cursor: pointer;
  background-color: transparent;
  color: white;
  border-color: transparent;
  padding-right: 40px;
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo" />
      <H1>MrDonald's</H1>
    </Logo>
    <NavBtnLogin>
      <img src={signImgBtn} alt="войти" />
      <p>войти</p>
    </NavBtnLogin>
  </NavBarStyled>
);
