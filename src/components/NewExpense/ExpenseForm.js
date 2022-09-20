import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //multiple state
  const [enteredTitle, setEnteredTitle] = useState("NItis");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // single state
  // const [userInput, setUserInput] = useState({
  //   enteredTitle1: "",
  //   enteredAmount2: "",
  //   enteredDate3: "",
  // });

  const titleChangeHandler = (event) => {
    //setting state when multiple values
    setEnteredTitle(event.target.value);

    // // 1: setting state when single values
    // setUserInput({
    //   ...userInput,
    //   enteredTitle1: "",
    // });
    // // 2: setting state when single values
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle1: "" };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userObject = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpense(userObject);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2022-07-01"
            max="2026-07-01"
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__action">
        <button onClick={props.hideForm}>cancel</button>
      </div>

      <div className="new-expense__action">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
