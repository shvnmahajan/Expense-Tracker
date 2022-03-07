
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpenseList from "./ExpenseList";

function Expenses(props) {
  const [filterValue, setFilterValue] = useState("2020");
  const filterChangeHandler = (newValue) => {
    setFilterValue(newValue);
    //console.log(filterValue);
  };

  console.log(props.expenses);

  const filteredExpenses = props.expenses.filter(
    (expense) =>
      expense.date.toLocaleString("en-US", { year: "numeric" }) === filterValue
  );
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterValue}
          onFilterChange={filterChangeHandler}
        />
        <ExpenseList expenses = {filteredExpenses}/>
      </Card>
    </div>
  );
}
export default Expenses;
