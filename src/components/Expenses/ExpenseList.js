import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.expenses.length === 0)
    return <h2 className="expense-list__fallback">No Expense Found.</h2>;
  else
    return props.expenses.map((expense) => (
      <ul className="expense-list">
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      </ul>
    ));
};

export default ExpenseList;
