import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  border-bottom: 1px solid rgba(80, 150, 164, 0.5);
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.5);
  width: 100%;
  z-index: 4;
  height: 150px;
  position: fixed;
  background-color: var(--main-color);

  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: static;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <MainNav />
    </StyledHeader>
  );
}

export default Header;
