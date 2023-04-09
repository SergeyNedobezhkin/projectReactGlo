import React from "react";
import styled from "styled-components";
import { ModalBtn } from "./ModalBtn";

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
`;
const Contant = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: calc(100% - 200px);
  padding: 30px;
`;

const HeaderContant = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  font-family: "Pacifico", cursive;
  font-style: normal;
  font-weight: 700;
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
        <Contant>
          <HeaderContant>
            <div>{openItem.name}</div>
            <div>
              {openItem.price.toLocaleString("ru-RU", {
                style: "currency",
                currency: "RUB",
              })}
            </div>
          </HeaderContant>
          <ModalBtn>Добавить</ModalBtn>
        </Contant>
      </Modal>
    </Overlay>
  );
};
