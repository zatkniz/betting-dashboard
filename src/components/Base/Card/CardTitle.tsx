import { ReactNode } from "react";
import styled from "styled-components";

interface CardTitleProps {
  children?: ReactNode;
}

const CardTitleStyle = styled.div`
  font-weight: 600;
  font-size: 18px;
  color: var(--card-label-color);
  text-align: center;
`;

export const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
  return <CardTitleStyle>{children}</CardTitleStyle>;
};
