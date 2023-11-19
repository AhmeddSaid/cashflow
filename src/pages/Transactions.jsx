import { useState, useEffect } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import Title from "../ui/Title";
import DataTable from "./DataTable";
import Button from "../ui/Button";

const GridContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 4px;
  overflow-y: scroll;
  padding: 0 6px 4px;
  max-height: 54dvh;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    padding: 2px;
  }
`;
const FormContainer = styled(GridContainer)`
  margin: 40px 0;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;
const GridHeader = styled.div`
  font-family: "Exo 2";
  font-weight: bold;
  border: 1px solid var(--alt-color);
  padding: 8px;
  text-align: center;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 2;
  background-color: var(--main-color);
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
const Input = styled.input`
  padding: 8px;
  background-color: var(--main-color);
  border: 1px solid var(--alt-color);
  color: var(--white-color);
  font-family: "Exo 2";
  &:focus {
    outline: none;
  }
`;
const DropDown = styled.select`
  background-color: var(--main-color);
  color: var(--white-color);
  border: 1px solid var(--alt-color);
  outline: none;
  font-family: "Exo 2";
  padding: 8px;
`;

function CRUDList() {
  const initialData = JSON.parse(localStorage.getItem("crudData")) || [];
  const [data, setData] = useState(initialData);
  const [formData, setFormData] = useState({
    amount: "",
    type: "income",
    category: "",
    date: "",
    description: "",
  });

  const [editIndex, setEditIndex] = useState(null);
  const [totalBalance, setTotalBalance] = useState(
    parseFloat(localStorage.getItem("totalBalance")) || 0
  );
  const [totalIncome, setTotalIncome] = useState(
    parseFloat(localStorage.getItem("totalIncome")) || 0
  );
  const [expenses, setExpenses] = useState(
    parseFloat(localStorage.getItem("expenses")) || 0
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    const { amount, type } = formData;
    const parsedAmount = parseFloat(amount);

    if (parsedAmount <= 0 || isNaN(parsedAmount)) {
      toast.error("Amount must be a valid number greater than 0.");
      return;
    }

    const newTransaction = {
      amount,
      type,
      category: formData.category,
      date: formData.date,
      description: formData.description,
    };

    const updatedData = [...data];

    if (editIndex !== null) {
      updatedData[editIndex] = newTransaction;
      setEditIndex(null);
    } else {
      updatedData.push(newTransaction);
    }

    if (type === "expense") {
      setTotalBalance(totalBalance - parsedAmount);
      setExpenses(expenses + parsedAmount);
      localStorage.setItem("totalBalance", totalBalance - parsedAmount);
      localStorage.setItem("expenses", expenses + parsedAmount);
    } else {
      setTotalBalance(totalBalance + parsedAmount);
      setTotalIncome(totalIncome + parsedAmount);
      localStorage.setItem("totalBalance", totalBalance + parsedAmount);
      localStorage.setItem("totalIncome", totalIncome + parsedAmount);
    }

    setData(updatedData);
    setFormData({
      amount: "",
      type: "income",
      category: "",
      date: "",
      description: "",
    });

    toast.success("Your transaction has been registered");
  };
  const handleEdit = (index) => {
    const selectedItem = data[index];
    const updatedFormData = {
      amount: selectedItem.amount,
      type: selectedItem.type,
      category: selectedItem.category,
      date: selectedItem.date,
      description: selectedItem.description,
    };
    setFormData(updatedFormData);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const deletedItem = data[index];
    const { amount, type } = deletedItem;

    if (type === "expense") {
      setTotalBalance(totalBalance + parseFloat(amount));
      setExpenses(expenses - parseFloat(amount));
      localStorage.setItem("totalBalance", totalBalance + parseFloat(amount));
      localStorage.setItem("expenses", expenses - parseFloat(amount));
    } else {
      setTotalBalance(totalBalance - parseFloat(amount));
      setTotalIncome(totalIncome - parseFloat(amount));
      localStorage.setItem("totalBalance", totalBalance - parseFloat(amount));
      localStorage.setItem("totalIncome", totalIncome - parseFloat(amount));
    }

    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    localStorage.setItem("crudData", JSON.stringify(data));
  }, [data]);

  return (
    <div>
      <Title>Transactions</Title>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleInputChange}
        />
        <DropDown
          name="type"
          value={formData.type}
          onChange={handleInputChange}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </DropDown>
        <Input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleInputChange}
        />
        <Input
          type="date"
          name="date"
          placeholder="Date"
          value={formData.date}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
        />
        <Button onClick={handleAdd}>Submit</Button>
      </FormContainer>
      <GridContainer>
        <GridHeader>Amount</GridHeader>
        <GridHeader>Type</GridHeader>
        <GridHeader>Category</GridHeader>
        <GridHeader>Date</GridHeader>
        <GridHeader>Description</GridHeader>
        <GridHeader>Action</GridHeader>
        {data.map((item, index) => (
          <DataTable
            item={item}
            key={index}
            onDelete={() => handleDelete(index)}
            onEdit={() => handleEdit(index)}
          />
        ))}
      </GridContainer>
    </div>
  );
}

export default CRUDList;
