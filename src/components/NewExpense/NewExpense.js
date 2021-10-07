import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const saveExpenseDataHandler = function (expenseData) {
    const data = {
      ...expenseData,
      id: Math.random().toString(),
    };

    // Hoist data to app.js
    props.onAddExpense(data);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
