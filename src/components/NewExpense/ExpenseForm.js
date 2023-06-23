import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enterdExpenseData, setEnteredExpenseData] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  
  const onChangeExpenseData = (type, value) => {
    switch (type) {
      case "title":
        return setEnteredExpenseData((prevExpenseData) => {
          return {
            ...prevExpenseData,
            enteredTitle: value,
          };
        });
      case "amount":
        return setEnteredExpenseData((prevExpenseData) => {
          return {
            ...prevExpenseData,
            enteredAmount: value,
          };
        });
      default: // "date"
        return setEnteredExpenseData((prevExpenseData) => {
          return {
            ...prevExpenseData,
            enteredDate: value,
          };
        });
    }
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    const { enteredTitle, enteredAmount, enteredDate } = enterdExpenseData;
    if (enteredTitle === "" || enteredAmount === "" || enteredDate === "") {
      return;
    }

    props.onFormSubimted(enterdExpenseData);
    setEnteredExpenseData({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    })
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enterdExpenseData.enteredTitle}
            onChange={(event) =>
              onChangeExpenseData("title", event.target.value)
            }
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterdExpenseData.enteredAmount}
            onChange={(event) =>
              onChangeExpenseData("amount", event.target.value)
            }
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enterdExpenseData.enteredDate}
            onChange={(event) =>
              onChangeExpenseData("date", event.target.value)
            }
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
