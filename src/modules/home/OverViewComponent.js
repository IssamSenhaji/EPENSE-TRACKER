import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  align-items: center;
  font-size: 16px;
  width: 100%;
`;
const ExpenseContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin: 20px;
  
`;
const ExpenseBox = styled.div`
  border-radius: 4px;
  border: 1px solid aqua;
  border-radius:10px;
  padding: 15px 25px;
  font-size: 20px;
  color:black;
  font-weight:bold;
  font-size:20px;
  display: flex;
  flex-direction: column;
  background-image:white;
  gap: 10px;
  width: 135px;
  & span {
    color: ${(props) => (props.isIncome ? "green" : "red")};
    font-weight: bold;
    font-size: 20px;
  }
`;
const BalanceBox = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color:navy;
  width: 100%;
  font-weight: bold;
  & span {
    color: #0d1d2c;
    opacity: 80%;
    font-weight: bold;
    font-size: 20px;
  }
`;
const AddTransaction = styled.div`
  font-size: 15px;
  background: navy  ;
  display: flex;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  flex-direction: row;
  border-radius: 4px;
  font-weight: bold;
`;
const AddTransactionContainer = styled.div`
  font-size: 15px;
  display: ${(props) => (props.isAddTxnVisible ? "flex" : "none")};
  color: #0d1d2c;
  flex-direction: column;
  border-radius: 10px;
  border: 7px solid #e6e8e9;
  background-image:linear-gradient(to right,aqua,black);
  width: 450px;
  align-items: center;
  padding: 15px 20px;
  margin: 10px 20px;
  gap: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  & input {
    width: 90%;
    outline: none;
    padding: 10px 12px;
    border-radius: 4px;
    border: 2px solid black;
    color:navy;
    font-size:15px;
    font-weight:bold;

  }
`;
const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  color:  brown;
  font-weight:bold;
  font-size:20px;
  margin: 10px 0;
  & input {
    width: unset;
    margin: 0 10px;
  }
  & label {
    color:navy;
  }
  
`;
const AddTransactionView = (props) => {
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [type, setType] = useState("EXPENSE");

  return (
    <AddTransactionContainer isAddTxnVisible={props.isAddTxnVisible}>
      <input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        placeholder="Description"
        value={desc}
        type="text"
        onChange={(e) => setDesc(e.target.value)}
      />
      <RadioBox>
        <input
          type="radio"
          id="expense"
          name="type"
          value="EXPENSE"
          checked={type === "EXPENSE"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          id="income"
          name="type"
          value="INCOME"
          checked={type === "INCOME"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="Expense">Income</label>
      </RadioBox>

      <AddTransaction
        onClick={() =>
          props.addTransaction({
            id: Date.now(),
            amount: Number(amount),
            desc,
            type,
          })
        }
      >
        Add Transaction
      </AddTransaction>
    </AddTransactionContainer>
  );
};
const OverViewComponent = (props) => {
  const [isAddTxnVisible, toggleAddTXn] = useState(false);
  return (
    <Container>
      <BalanceBox>
        Balance:{props.income - props.expense}Dh
        <AddTransaction onClick={() => toggleAddTXn((isVisible) => !isVisible)}>
          {isAddTxnVisible ? "CANCEL" : "ADD"}
        </AddTransaction>
      </BalanceBox>
      {isAddTxnVisible && (
        <AddTransactionView
          isAddTxnVisible={isAddTxnVisible}
          addTransaction={(payload) => {
            props.addTransaction(payload);
            toggleAddTXn((isVisible) => !isVisible);
          }}
        />
      )}
      <ExpenseContainer>
        <ExpenseBox>
          Expense<span>{props.expense}Dh</span>
        </ExpenseBox>
        <ExpenseBox isIncome={true}>
          Income<span>{props.income}Dh</span>
        </ExpenseBox>
      </ExpenseContainer>
    </Container>
  );
};
export default OverViewComponent;