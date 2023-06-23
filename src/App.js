import { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);
  const [selectedYear, setSelectedYear] = useState(null);

  const newExpenseSubmitHandler = (newExpenseData) => {
    setExpenses((prevExpenses) => {
      return [
        {
          ...newExpenseData,
          title: newExpenseData.enteredTitle,
          amount: newExpenseData.enteredAmount,
          date: new Date(newExpenseData.enteredDate),
        },
        ...prevExpenses,
      ];
    });
  };

  const expenseFilterHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filterExpenses = () => {
    return selectedYear
      ? expenses.filter(
          (expense) => expense.date.getFullYear().toString() === selectedYear
        )
      : expenses;
  };
  return (
    <>
      <NewExpense onNewExpenseSubmitted={newExpenseSubmitHandler} />
      <Expenses onYearSelect={expenseFilterHandler}>
        {filterExpenses().map((item, index) => (
          <ExpenseItem key={item.id} expense={item} />
        ))}
      </Expenses>
    </>
  );
}

export default App;
