import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';



function Expenses(props) {
  const selectYearHandler = (selectedYear) => {
    console.log(selectedYear);
  }
  return (
    <Card className="Expenses-container">
      <ExpensesFilter onSelectYear={selectYearHandler}/>
      {props.children}
    </Card>
  );
}

export default Expenses;
