import { ReactNode } from "react";
import styled from "styled-components";

interface ModalOverlayProps {
  children?: ReactNode;
  onClick: () => void;
}

const ModalOverlayStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(24, 24, 27, 0.7);
  z-index: 90;
`;

export const ModalOverlay: React.FC<ModalOverlayProps> = ({
  children,
  onClick,
}) => {
  return (
    <ModalOverlayStyle onClick={() => onClick()}>{children}</ModalOverlayStyle>
  );
};
