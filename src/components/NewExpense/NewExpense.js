import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [state, setState] = useState("hidden-form");

  const submitExpenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setState("hidden-form");
  };

  const addNewExpenseClickHandler = () => {
    setState("visible-form");
  };

  return (
    <div className="new-expense">
      {state === "visible-form" ? (
        <ExpenseForm onSubmitExpenseData={submitExpenseDataHandler} />
      ) : (
        <button onClick={addNewExpenseClickHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
