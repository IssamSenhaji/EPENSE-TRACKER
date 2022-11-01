import styled from "styled-components";
import React, { useEffect, useState } from "react";

const Container = styled.div`
  background-color: white;
  color: navy;
  display: flex;
  flex-direction: column;
  padding: 10px 22px;
  font-size: 18px;
  width: 500PX;
  gap: 10px;
  font-weight: bold;
  background-image:linear-gradient(to right,aqua,black);
  overflow-y: auto !important;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  & input {
    padding: 10px 12px;
    border-radius: 12px;
    background-color: white   ;
    border: 1px solid #e6e8e9;
    font-size:15px;
    font-weight:bold;
    outline: none;
    color:navy;
  }
`;
const Cell = styled.div`
  background-color:;
  color: white;
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 10px;
  border: 2px solid white;
  align-items: center;
  font-weight: normal;
  justify-content: space-between;
  border-right: 3px solid ${(props) => (props.isExpense ? "red" : "green")};
`;
const TransactionCell = (props) => {
  return (
    <Cell isExpense={props.payload?.type === "EXPENSE"}>
      <span>{props.payload?.desc}</span>
      <span>{props.payload?.amount}Dh</span>
     
    </Cell>
  );
};
const TransactionsComponent = (props) => {
  const [searchText, updateSearchText] = useState("");
  const [filteredTransaction, updateTxn] = useState(props.transactions);

  const filterData = (searchText) => {
    if (!searchText || !searchText.trim().length) {
      updateTxn(props.transactions);
      return;
    }
    let txn = [...props.transactions];
    txn = txn.filter((payload) =>
      payload.desc.toLowerCase().includes(searchText.toLowerCase().trim()),
    );
    updateTxn(txn);
  };
// const Delete=()=>{
//   const newTransactions = txn.filter((item) => item.id != id);
//         (newTransactions);
// }
  useEffect(() => {
    filterData(searchText);
  }, [props.transactions]);

  return (
    <Container>
      Transactions
      <input
        placeholder="Search"
        onChange={(e) => {
          updateSearchText(e.target.value);
          filterData(e.target.value);
        }}
      />
      {filteredTransaction?.map((payload) => (
        <TransactionCell payload={payload} />
      ))}
    </Container>
  );
};
export default TransactionsComponent;
