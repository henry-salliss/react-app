import { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const titleChange = function (e) {
    setEnteredTitle(e.target.value);
  };

  const amountChange = function (e) {
    setEnteredAmount(e.target.value);
  };

  const dateChange = function (e) {
    setEnteredDate(e.target.value);
  };

  const submitHandler = function (e) {
    e.preventDefault();

    const data = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(data);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>

          <input type="text" value={enteredTitle} onChange={titleChange} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>

          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChange}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>

          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChange}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onMakeNewExpense}>
          Cancel
        </button>

        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
