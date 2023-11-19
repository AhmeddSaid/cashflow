import styled from "styled-components";
import { RiExchangeDollarLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const StyledLogo = styled(Link)`
  text-shadow: var(--main-shadow);
  color: var(--white-color);
  background-color: #0f1724;
  font-family: "Black Ops One";
  font-weight: 400;
  font-size: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    font-size: 38px;
    text-align: center;
  }
`;

const StyledIcon = styled(RiExchangeDollarLine)`
  filter: drop-shadow(var(--main-shadow));
`;

function Logo() {
  return (
    <StyledLogo to="/">
      Ca
      <StyledIcon />
      hFlow
    </StyledLogo>
  );
}

export default Logo;
