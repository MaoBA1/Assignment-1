import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';



function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState(null);
  const selectYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);    
  }

  const expensesFiltered = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear
  })

  let expensesContent = <p>There is No Expesnses</p>

  if(expensesFiltered.length > 0) {
    expensesContent = expensesFiltered.map((item, index) => (
      <ExpenseItem 
        key={item.id}
        expense={item} 
      />
    ))
  }
  return (
    <Card className="Expenses-container">
      <ExpensesFilter 
        onSelectYear={selectYearHandler}
      />
      {expensesContent}
    </Card>
  );
}

export default Expenses;
