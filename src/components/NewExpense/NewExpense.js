import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  // create state for add expense btn
  const [clicked, setClicked] = useState(false);

  // executed on form submit
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

  // shows form
  const showExpenseForm = function () {
    setClicked(true);
  };

  // hides form
  const expenseFormFalse = function () {
    console.log("executed");
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
