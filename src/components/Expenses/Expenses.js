import { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';



function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState(null);
  const selectYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);    
  }

  const expensesFiltered = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear
  })
  
  return (
    <Card className="Expenses-container">
      <ExpensesFilter 
        onSelectYear={selectYearHandler}
      />
      <ExpensesChart expenses={expensesFiltered}/>
      <ExpensesList expenses={expensesFiltered}/>
    </Card>
  );
}

export default Expenses;
