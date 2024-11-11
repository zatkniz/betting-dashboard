import React, { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const ButtonFooterButtonStyle = styled.button`
  font-weight: 600;
  font-size: 14px;
  color: var(--card-label-color);
  text-align: center;
  background-color: transparent;
  shadow: 0px 0px 0px 1px var(--card-border-color);
  border-radius: 15px;
  border: 1px solid var(--card-border-color);
  padding: 10px 20px;
  cursor: pointer;
`;

const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <ButtonFooterButtonStyle onClick={() => onClick()}>
    {children}
  </ButtonFooterButtonStyle>
);

export default Button;
