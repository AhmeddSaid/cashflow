import styled from "styled-components";

const StyledTitle = styled.div`
  font-size: 2rem;
  font-family: "Kdam Thmor Pro";
  text-transform: capitalize;
  text-shadow: var(--main-shadow);
  user-select: none;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

function Title({ children }) {
  const usernameExists = localStorage.getItem("username");

  return (
    <StyledTitle>
      {usernameExists}&apos;s CashFlow {children}
    </StyledTitle>
  );
}

export default Title;
