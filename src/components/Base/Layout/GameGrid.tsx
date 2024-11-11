import { ReactNode } from "react";
import styled from "styled-components";

interface GameGridProps {
  children?: ReactNode;
}

const GameGridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

export const GameGrid: React.FC<GameGridProps> = ({ children }) => {
  return <GameGridStyle>{children}</GameGridStyle>;
};
