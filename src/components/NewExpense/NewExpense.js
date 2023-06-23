import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isEdditing, setIsEditing] = useState(false);
  const formSubmitHandler = (enterdExpenseData) => {
    const expenseData = {
      ...enterdExpenseData,
      id: Math.random(),
    };
    props.onNewExpenseSubmitted(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {isEdditing ? (
        <ExpenseForm
          onFormSubimted={formSubmitHandler}
          onCancel={stopEditingHandler}
        />
      ) : (
        <div>
          <button onClick={startEditingHandler}>Add New Expense</button>
        </div>
      )}
    </div>
  );
}

export default NewExpense;
