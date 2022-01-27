import React from "react";
import {
  CardContentContainer,
  CardHeaderContainer,
  CardMainContainer,
  CardFooterContainer,
} from "./styles";

const Card = ({ headerChild, mainChild, footerChild }) => {
  return (
    <CardContentContainer>
      <CardHeaderContainer>
        <span>{headerChild}</span>
      </CardHeaderContainer>
      <CardMainContainer>
        <h1>{mainChild}</h1>
      </CardMainContainer>
      <CardFooterContainer>
        <p>Updated at {footerChild}</p>
      </CardFooterContainer>
    </CardContentContainer>
  );
};

export default Card;
