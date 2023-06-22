import { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';



function Expenses(props) {
  const [ selectedYear, setSelectedYear ] = useState(null);
  const selectYearHandler = (selectedYear) => {
    console.log(selectedYear);
    setSelectedYear()
  }
  return (
    <Card className="Expenses-container">
      <ExpensesFilter onSelectYear={selectYearHandler}/>
      {props.children}
    </Card>
  );
}

export default Expenses;
