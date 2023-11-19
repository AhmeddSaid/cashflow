/* eslint-disable react/prop-types */
import styled from "styled-components";
import { formatCurrency } from "../utils/helpers";
import { HiTrash, HiPencil } from "react-icons/hi2";
import toast from "react-hot-toast";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const GridColumn = styled.div`
  padding: 8px;
  border: 1px solid var(--alt-color);
  font-family: "Kdam Thmor Pro";
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 768px) {
    font-size: 0.6rem;
    padding: 4px;
  }
`;
const ActionButton = styled.button`
  background-color: var(--main-color);
  outline: none;
  color: var(--white-color);
  font-size: 18px;
  border: 1px solid var(--alt-color);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  cursor: pointer;
  transition: 300ms;
  &:hover {
    color: var(--white-color);
    filter: drop-shadow(var(--main-shadow));
  }
`;

function DataTable({ item, onDelete, onEdit }) {
  const { amount, type, category, date, description } = item;

  const handleDeleteButton = () => {
    confirmAlert({
      title: "Confirm Deletion",
      message: "Are you sure you want to delete this transaction?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            onDelete();
            toast.success("Transaction Deleted");
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const handleEditButton = () => {
    onEdit(item);
  };

  return (
    <>
      <GridColumn>{formatCurrency(amount)}</GridColumn>
      <GridColumn>{type}</GridColumn>
      <GridColumn>{category}</GridColumn>
      <GridColumn>{date}</GridColumn>
      <GridColumn>{description}</GridColumn>
      <GridColumn>
        <ActionButton type="button" onClick={handleDeleteButton}>
          <HiTrash />
        </ActionButton>
        <ActionButton type="button" onClick={handleEditButton}>
          <HiPencil />
        </ActionButton>
      </GridColumn>
    </>
  );
}

export default DataTable;
