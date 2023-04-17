import React, { useContext } from "react";
import styled from "styled-components";
import logoImg from "../../image/logo.svg";
import signImgBtn from "../../image/sign.svg";
import { Context } from "../Functions/context";

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
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
  padding-right: 20px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const LogOut = styled.span`
  font-size: 20px;
  font-waight: 700px;
  cursor: pointer;
  margin-right: 30px;
  background-color: red;
  width: 25px;
  border-radius: 50%;
`;

const Figure = styled.figure`
  margin: 0 30px;
`;

export const NavBar = () => {
  const {
    auth: { authentication, logIn, logInOut },
  } = useContext(Context);

  return (
    <NavBarStyled>
      <Logo>
        <ImgLogo src={logoImg} alt="logo" />
        <H1>MrDonald's</H1>
      </Logo>
      {authentication ? (
        <User>
          <Figure>
            <img src={signImgBtn} alt="{authentication.displayName}" />
            <figcaption>{authentication.displayName}</figcaption>
          </Figure>
          <LogOut title="Выйти" onClick={logInOut}>
            X
          </LogOut>
        </User>
      ) : (
        <NavBtnLogin onClick={logIn}>
          <Figure>
            <img src={signImgBtn} alt="войти" />
            <figcaption>Войти</figcaption>
          </Figure>
        </NavBtnLogin>
      )}
    </NavBarStyled>
  );
};
