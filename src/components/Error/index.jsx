import React from "react";
import { ErrorContainer } from "./styles";

const Error = ({onClick}) => {
  return (
    <ErrorContainer>
      <p>Something went wrong</p>
      <button onClick={onClick}>Try Again</button>
    </ErrorContainer>
  );
};

export default Error;
