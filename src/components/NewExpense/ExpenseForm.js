import { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChange = function (e) {
    setEnteredTitle(e.target.value);
  };

  const [enteredAmount, setEnteredAmount] = useState("");

  const amountChange = function (e) {
    setEnteredAmount(e.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");

  const dateChange = function (e) {
    setEnteredDate(e.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>

          <input type="text" onChange={titleChange} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>

          <input type="number" min="0.01" step="0.01" onChange={amountChange} />
        </div>

        <div className="new-expense__control">
          <label>Date</label>

          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChange}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
