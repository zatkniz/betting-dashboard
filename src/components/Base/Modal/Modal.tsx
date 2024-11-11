import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import { ModalOverlay } from "./ModalOverlay";

interface ModalProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

const ModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  footer,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <ModalStyle className="modal">
        <Card title={title} footer={footer}>
          {children}
        </Card>
      </ModalStyle>
      <ModalOverlay onClick={onClose} />
    </>
  );
};

export default Modal;
