import './Expenses.css';



function Expenses(props) {
  return (
    <div className="Expenses-container">
      {props.children}
    </div>
  );
}

export default Expenses;
