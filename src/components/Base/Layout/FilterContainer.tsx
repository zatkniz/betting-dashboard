import { ReactNode } from "react";
import styled from "styled-components";

interface FilterContainerProps {
  children?: ReactNode;
}

const FilterContainerStyle = styled.div`
  margin-bottom: 20px;
  width: 100%;
  max-width: 1200px;
`;

export const FilterContainer: React.FC<FilterContainerProps> = ({
  children,
}) => {
  return <FilterContainerStyle>{children}</FilterContainerStyle>;
};
