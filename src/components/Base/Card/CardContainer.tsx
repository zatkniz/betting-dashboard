import { ReactNode } from "react";
import styled from "styled-components";

interface CardContainerProps {
  children?: ReactNode;
  isSelected?: boolean;
}

const CardContainerStyled = styled.div<{ isSelected: boolean }>`
  background-color: ${(props) =>
    props.isSelected ? "var(--card-icon-background-color)" : "var(--background-color)"};
  box-shadow: 0px var(--card-box-shadow-1-y) var(--card-box-shadow-1-blur)
      var(--card-box-shadow-1),
    0px var(--card-box-shadow-2-y) var(--card-box-shadow-2-blur)
      var(--card-box-shadow-2),
    0 0 0 1px var(--card-border-color);
  padding: 16px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardContainer: React.FC<CardContainerProps> = ({ children, isSelected }) => {
  return <CardContainerStyled isSelected={!!isSelected}>{children}</CardContainerStyled>;
};
