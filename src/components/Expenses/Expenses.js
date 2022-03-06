import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

function Expenses(props) {
  const [filterValue, setFilterValue] = useState("2020");
  const filterChangeHandler = (newValue) => {
    setFilterValue(newValue);
    //console.log(filterValue);
  };

  console.log(props.expenses);
  return (
    <div>
      <p>{filterValue}</p>

      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterValue}
          onFilterChange={filterChangeHandler}
        />
        {props.expenses
          .filter(
            (expense) =>
              expense.date.toLocaleString("en-US", { year: "numeric" }) ===
              filterValue
          )
          .map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>
    </div>
  );
}
export default Expenses;
