import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  isShowModal: boolean;
  closeIcon: () => void;
  children?: ReactNode;
  width?: string;
  height?: string;
  color?: string;
};

const Modal = ({
  isShowModal,
  closeIcon,
  children,
  width = "60%",
  height = "60vh",
  color = "#fff",
}: Props) => {
  return isShowModal ? (
    <Background onClick={closeIcon}>
      <ModalContainer
        onClick={(e) => e.stopPropagation()}
        style={{ width, height, backgroundColor: color }}
      >
        {children}
      </ModalContainer>
    </Background>
  ) : null;
};

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 0;
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
`;

export default Modal;
