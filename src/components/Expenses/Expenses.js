import Card from '../UI/Card';
import './Expenses.css';



function Expenses(props) {
  return (
    <Card className="Expenses-container">
      {props.children}
    </Card>
  );
}

export default Expenses;
