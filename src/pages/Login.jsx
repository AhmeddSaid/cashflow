import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StyledButton } from "../ui/ButtonStyle";

const StyledLogin = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
  margin-top: 80px;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-family: "Kdam Thmor Pro";
  letter-spacing: 2px;
  text-shadow: var(--main-shadow);
  user-select: none;
  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const UsernameInput = styled.input`
  width: 300px;
  background-color: var(--main-color);
  border: 1px solid var(--alt-color);
  outline: none;
  padding: 12px 16px;
  color: var(--white-color);
  transition: 300ms;
  font-family: "Kdam Thmor Pro";
  font-size: 1.2rem;
  caret-color: var(--alt-color);
  text-transform: capitalize;
  &:focus {
    box-shadow: var(--main-shadow);
  }
`;

const SubmitButton = styled(StyledButton)`
  padding: 10px 16px;
  font-size: 1.2rem;
`;

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    window.location.reload(true);
  };

  useEffect(() => {
    if (localStorage.getItem("username")) {
      navigate("/overview");
    }
  }, [navigate]);

  return (
    <StyledLogin onSubmit={handleSubmit}>
      <Heading>Start By Entering Your Name</Heading>
      <UsernameInput
        type="text"
        value={username}
        onChange={handleInputChange}
      />
      <SubmitButton type="submit">Log In</SubmitButton>
    </StyledLogin>
  );
};

export default Login;
