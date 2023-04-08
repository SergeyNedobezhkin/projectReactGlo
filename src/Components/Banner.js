import React from "react";
import styled from "styled-components";
import MenuBannerImg from "../image/banner.png";

const MenuBannerStyleImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const Banner = (pros) => (
  <MenuBannerStyleImg src={MenuBannerImg} alt="Banner-burger" />
);
