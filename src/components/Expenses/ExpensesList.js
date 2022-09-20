import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <p className="expenses-list__fallback">No item found</p>;
  }

  return props.items.map((expense, index) => (
    <ul className="expenses-list">
      <ExpenseItem
        key={expense.id || index}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    </ul>
  ));
};

export default ExpensesList;
