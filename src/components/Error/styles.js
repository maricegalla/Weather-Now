import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 180px;
  width: 100%;
  gap: 20px;

  p {
    color: var(--red);
    font-size: 18px;
    font-weight: 300;
  }

  button {
    background-color: var(--white);
    color: var(--darkGray);
    font-size: 18px;
    height: 44px;
    width: 110px;
    border: 2px solid var(--darkGray);
    border-radius: 22px;
    cursor: pointer;
  }
`;

export { ErrorContainer };
