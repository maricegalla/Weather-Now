import styled from "styled-components";

const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 260px;
  min-height: 224px;
  max-height: 320px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.colors.lightGray.shade4} 2px 2px 5px 0;
  z-index: 1;

  .loader{
    margin-top: 54px;
  }
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
  height: 160px;
  width: 100%;

  p {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 100px;
  }

  small {
    position: relative;
    bottom: 20px;
    font-size: 50px;
  }
`;

const CardFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 40px;
  max-height: 100px;
  padding: 15px;
  background-color: ${(props) => props.theme.colors.lightGray.shade1};
  gap: 15px;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 5px;
    }
  }

  label {
    color: ${(props) => props.theme.colors.mediumGray};
    font-size: 12px;
  }

  span {
    color: ${(props) => props.theme.colors.darkGray};
    font-size: 18px;
  }

  small {
    color: ${(props) => props.theme.colors.darkGray};
    font-size: 12px;
  }

  p {
    color: ${(props) => props.theme.colors.mediumGray};
    font-size: 12px;
  }
`;


const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 180px;
  width: 100%;
  gap: 20px;

  p {
    color: ${(props) => props.theme.colors.red};
    font-size: 18px;
    font-weight: 300;
  }

  button {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.darkGray};
    font-size: 18px;
    height: 44px;
    width: 110px;
    border: 2px solid  ${(props) => props.theme.colors.darkGray};
    border-radius: 22px;
    cursor: pointer;
  }
`

export {
  CardContentContainer,
  CardHeaderContainer,
  CardMainContainer,
  CardFooterContainer,
  ErrorContainer,
};
