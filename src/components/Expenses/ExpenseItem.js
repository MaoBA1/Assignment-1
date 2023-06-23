import Card from "../UI/Card";
import ExpensDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const day = props.expense.date.toLocaleString("en-US", { month: "long" });
  const month = props.expense.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.expense.date.getFullYear();
  const expenseItem = props.expense.title;
  const expensePrice = props.expense.amount;

  return (
    <li>
      <Card className="expense-item">
        <ExpensDate day={day} month={month} year={year} />

        <div className="expense-item__description">
          <h2 className="expense-item h2">{expenseItem}</h2>
          <div className="expense-item__price">${expensePrice}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
