import styled from "styled-components";

const MainContentContainer = styled.div`
  background-color: ${props => props.theme.colors.lightGray.shade2};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  height: 100vh;
  width: 100vw;
  padding-top: 60px;
`;

export { MainContentContainer };
