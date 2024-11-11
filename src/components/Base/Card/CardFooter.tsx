import { ReactNode } from "react";
import styled from "styled-components";
interface CardFooterProps {
  children: ReactNode;
}

const CardFooterStyle = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: var(--card-label-color);
  text-align: center;
`;

export const CardFooter: React.FC<CardFooterProps> = ({ children }) => {
  return <CardFooterStyle>{children}</CardFooterStyle>;
};
