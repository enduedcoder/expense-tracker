import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const onSaveNewExpenseHandler = (newExpense) => {
    props.onAddNewExpense(newExpense);
    setShowForm(false);
  };

  const showFormHandler = () => {
    setShowForm(true);
  };

  const hideFormHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {!showForm && <button onClick={showFormHandler}>Add Expense</button>}

      {!!showForm && (
        <ExpenseForm
          onSaveExpense={onSaveNewExpenseHandler}
          hideForm={hideFormHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
