import React, { ReactNode } from "react";
import { CardContainer } from "./CardContainer";
import { CardTitle } from "./CardTitle";
import { CardBody } from "./CardBody";
import { CardFooter } from "./CardFooter";

interface CardProps {
  title: ReactNode;
  children: ReactNode;
  footer: ReactNode;
  isSelected?: boolean;
}

const Card: React.FC<CardProps> = ({ title, children, footer, isSelected }) => (
  <CardContainer isSelected={isSelected}>
    <CardTitle>{title}</CardTitle>
    <CardBody>{children}</CardBody>
    <CardFooter>{footer}</CardFooter>
  </CardContainer>
);

export default Card;
