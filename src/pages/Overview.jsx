import styled from "styled-components";
import { formatCurrency } from "../utils/helpers";
import Title from "../ui/Title";

const MainOverview = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

const StyledOverview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Exo 2";
  font-size: 2rem;
  text-align: center;
  border: 1px solid var(--alt-color);
  border-radius: 16px;
  padding: 40px;
  box-shadow: var(--main-shadow);
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 50px;
    font-size: 1.7rem;
  }
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  & span {
    transition: 300ms;
    user-select: none;
    text-shadow: var(--main-shadow);
  }
  &:hover span {
    color: var(--alt-color);
    text-shadow: var(--main-shadow);
  }
  @media screen and (max-width: 768px) {
    gap: 10px;
  }
`;

function Overview() {
  const totalBalance = parseFloat(localStorage.getItem("totalBalance")) || 0;
  const totalIncome = parseFloat(localStorage.getItem("totalIncome")) || 0;
  const expenses = parseFloat(localStorage.getItem("expenses")) || 0;

  return (
    <MainOverview>
      <Title>Overview</Title>
      <StyledOverview>
        <OverviewItem>
          <span>Total Balance</span>
          <div>{formatCurrency(totalBalance)}</div>
        </OverviewItem>
        <OverviewItem>
          <span>Total Income</span> <div>{formatCurrency(totalIncome)}</div>
        </OverviewItem>
        <OverviewItem>
          <span>Expenses</span> <div>{formatCurrency(expenses)}</div>
        </OverviewItem>
      </StyledOverview>
    </MainOverview>
  );
}

export default Overview;
