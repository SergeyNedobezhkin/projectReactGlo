import React from "react";
import styled from "styled-components";
import { ModalButton } from "./ModalButton";

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  padding-top: 50px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
`;

const Modal = styled.div`
  width: 600px;
  height: 600px;
  background-color: #ffffff;
`;

const ModalBanner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  margin-bottom: 20px; ;;
`;
const NameAndPriceDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NamePriceDiv = styled.div`
  alight-item: start;
  padding-left: 20px;

  font-family: "Pacifico";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
`;
const PriceDiv = styled.div`
  alight-item: end;
  padding-right: 50px;
  font-family: "Pacifico";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
`;

export const ModalItem = ({ openItem, setOpenItem }) => {
  function closeModal(e) {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    }
  }

  if (!openItem) return null;

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <ModalBanner img={openItem.img} />
        <NameAndPriceDiv>
          <NamePriceDiv>{openItem.name}</NamePriceDiv>
          <PriceDiv>
            {openItem.price.toLocaleString("ru-RU", {
              style: "currency",
              currency: "RUB",
            })}
          </PriceDiv>
        </NameAndPriceDiv>
        <ModalButton />
      </Modal>
    </Overlay>
  );
};
