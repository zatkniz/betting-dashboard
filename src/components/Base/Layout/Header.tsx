import { ReactNode } from "react";
import styled from "styled-components";

interface HeaderProps {
  children?: ReactNode;
}

const HeaderStyle = styled.h1`
  color: var(--card-label-color);
  margin-bottom: 20px;
`;

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return <HeaderStyle>{children}</HeaderStyle>;
};
