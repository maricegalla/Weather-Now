import React from "react";
import { HeaderContentContainer } from "./styles";
import {ReactComponent as Logo} from "src/assets/logo.svg";

const Header = () => {
  return (
    <HeaderContentContainer>
      <Logo />
    </HeaderContentContainer>
  );
};

export default Header;
