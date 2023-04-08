import React from "react";
import styled from "styled-components";
import MenuBannerImg from "../image/banner.png";

const MenuBannerStyleImg = styled.div`
  width: 100%;
  height: 300px;
  padding-top: 77px;
  background-image: url(${MenuBannerImg});
  background-position: center;
  background-size: cover;
`;

export const Banner = (pros) => <MenuBannerStyleImg />;
