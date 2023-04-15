import React from "react";
import styled from "styled-components";
import MenuLoadingImg from "../../image/loading.png";

const MenuLoadingStyleImg = styled.div`
  width: 4.375rem;
  height: 4.375rem;
  margin: 0px auto;
  padding-top: 77px;
  background-image: url(${MenuLoadingImg});
  background-position: center;
  background-size: cover;
`;

export const Loading = () => <MenuLoadingStyleImg />;
