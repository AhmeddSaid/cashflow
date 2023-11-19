import styled from "styled-components";

export const StyledButton = styled.button`
  color: var(--white-color);
  background-color: var(--main-color);
  border: 1px solid var(--alt-color);
  font-family: "Exo 2";
  font-size: 16px;
  font-weight: 700;
  transition: 300ms;
  cursor: pointer;
  z-index: 1;
  position: relative;
  overflow: hidden;
  user-select: none;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--alt-color);
    transform: translateX(-100%);
    transition: 300ms;
    z-index: -1;
  }
  &:hover::before {
    transform: translateX(0);
  }

  @media screen and (max-width: 768px) {
      padding: 8px;
    }
`;