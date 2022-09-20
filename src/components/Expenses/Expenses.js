import { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import "../NewExpense/NewExpense";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const getChangeDatehandler = (year) => {
    setFilteredYear(year);
  };

  const filteredItems = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filteredYearData={filteredYear}
          onChangeData={getChangeDatehandler}
        />
        <ExpensesChart expenses={filteredItems} />
        <ExpensesList items={filteredItems} />
      </Card>
    </div>
  );
};

export default Expenses;
