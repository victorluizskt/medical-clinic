import React, { ReactNode } from "react";
import { CardContainer } from "./styles";

interface Props {
  children?: ReactNode,
  width: string,
  height: string,
}

function Card ({children, width, height}: Props) {
  return (
    <CardContainer
      width={width}
      height={height}
    >
      {children}
    </CardContainer>
  );
}

export default Card;
