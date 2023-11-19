import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 16px 0;
  height: 100dvh;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: fit-content;
    padding: 4px;
  }
`;

const Main = styled.main`
  grid-area: 2 / 2/ 6 / 5;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    grid-area: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    overflow: auto;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  @media screen and (max-width: 768px) {
    gap: 2rem;
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
