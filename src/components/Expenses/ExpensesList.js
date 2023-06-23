import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  console.log(props.expenses);
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No Expese Found.</h2>
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((item) => (
        <ExpenseItem key={item.id} expense={item} />
      ))}
    </ul>
  );
};

export default ExpensesList;
