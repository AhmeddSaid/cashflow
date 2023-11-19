import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineHome } from "react-icons/hi2";
import { RiMoneyDollarBoxLine, RiLogoutBoxLine } from "react-icons/ri";

const NavList = styled.ul`
  display: flex;
  gap: 0.8rem;
  @media screen and (max-width: 768px) {
    gap: 2.2rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  user-select: none;
  display: flex;
  flex-direction: column;

  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: #ffffff81;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 300ms;
    text-decoration: none;
    @media screen and (max-width: 768px) {
      gap: 0.5rem;
      padding: 10px;
    }
  }
  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--white-color);
    filter: drop-shadow(var(--main-shadow));
  }
  & svg {
    width: 2.4rem;
    height: 2.4rem;
    transition: all 300ms;
    @media screen and (max-width: 768px) {
      width: 2rem;
      height: 2rem;
    }
  }
  /* hover effect to display text */
  span {
    opacity: 0;
    transition: opacity 300ms;
    font-family: "Kdam Thmor Pro";
    font-size: 1rem;
    font-weight: 500;
    color: var(--white-color);
  }
  &:hover span,
  &:active span,
  &.active:link span,
  &.active:visited span {
    opacity: 1;
  }
`;

function MainNav() {
  // Check if the username exists in local storage
  const usernameExists = !!localStorage.getItem("username");

  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload(true);
  };

  return (
    <NavList>
      <li>
        <StyledNavLink to="/">
          <HiOutlineHome />
          <span>Home</span>
        </StyledNavLink>
      </li>
      {usernameExists && (
        <li>
          <StyledNavLink to="/transactions">
            <RiMoneyDollarBoxLine />
            <span>Transactions</span>
          </StyledNavLink>
        </li>
      )}
      {usernameExists && (
        <li>
          <StyledNavLink to="/login" onClick={handleLogOut}>
            <RiLogoutBoxLine />
            <span>Log Out</span>
          </StyledNavLink>
        </li>
      )}
    </NavList>
  );
}

export default MainNav;
