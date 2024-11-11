import { ReactNode } from "react";
import styled from "styled-components";

interface CardBodyProps {
  children?: ReactNode;
}

const CardBodyStyle = styled.div`
  z-index: 2;
  position: relative;
  margin: 0;
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-color);
  margin: 15px 0;
`;

export const CardBody: React.FC<CardBodyProps> = ({ children }) => {
  return <CardBodyStyle>{children}</CardBodyStyle>;
};
