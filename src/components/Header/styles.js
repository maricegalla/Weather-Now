import styled from "styled-components";

const HeaderContentContainer = styled.div`
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  z-index: 10;
  background-color: ${props => props.theme.colors.white};

  svg {
    width: 40%;
    height: 40%;
  }
`;

export { HeaderContentContainer };
