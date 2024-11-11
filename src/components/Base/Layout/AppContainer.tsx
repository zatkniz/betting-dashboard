import { ReactNode } from "react";
import styled from "styled-components";

interface AppContainerProps {
  children?: ReactNode;
}

const AppContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: var(--background-color);
  min-height: 100vh;
  font-family: "Inter", Arial;
`;

export const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return <AppContainerStyle>{children}</AppContainerStyle>;
};
