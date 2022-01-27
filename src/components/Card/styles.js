import styled from "styled-components";

const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 260px;
  min-height: 224px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.colors.lightGray.shade4} 2px 2px 5px 0;
  z-index: 1;
`;

const CardHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGray.shade3};

  span {
    color: ${(props) => props.theme.colors.darkGray};
    font-size: 18px;
  }
`;

const CardMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
  width: 100%;

  h1 {
    font-size: 90px;
  }

  .orange {
    color: ${(props) => props.theme.colors.orange}
  }

  .blue {
    color: ${(props) => props.theme.colors.blue}
  }

  .red {
    color: ${(props) => props.theme.colors.blue}
  }
`;

const CardFooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 40px;
  background-color: ${(props) => props.theme.colors.lightGray.shade1};

  p {
    color: ${(props) => props.theme.colors.mediumGray};
    font-size: 12px;
  }
`;

export {
  CardContentContainer,
  CardHeaderContainer,
  CardMainContainer,
  CardFooterContainer,
};
