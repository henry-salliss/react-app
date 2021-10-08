import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [clicked, setClicked] = useState(false);

  const saveExpenseDataHandler = function (expenseData) {
    const data = {
      ...expenseData,
      id: Math.random().toString(),
    };

    // Hoist data to app.js
    props.onAddExpense(data);

    // hide form after submit

    setClicked(false);
  };

  const showExpenseForm = function () {
    setClicked(true);
  };

  const expenseFormFalse = function () {
    setClicked(false);
  };

  return (
    <div className="new-expense">
      {clicked ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onMakeNewExpense={expenseFormFalse}
        />
      ) : (
        <button onClick={showExpenseForm}>Add expense</button>
      )}
    </div>
  );
}

export default NewExpense;
