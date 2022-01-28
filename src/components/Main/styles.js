import styled from "styled-components";

const MainContentContainer = styled.div`
  background-color: var(--lightGrayShade2);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  z-index: -1;
  height: 100vh;
  width: 100vw;
  padding-top: 60px;

  @media (max-width: 1023px) {
    flex-direction: column;
    height: 100%;
    padding: 100px 0 50px;
  }
`;

export { MainContentContainer };
