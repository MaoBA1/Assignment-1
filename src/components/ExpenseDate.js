import Card from './Card';
import './ExpenseDate.css'

function ExpensDate({ day, month, year }) {
    
    return (  
        <Card className="expense-date ">
            <div className="expense-date__day">
                {day}
            </div>
            <div className="expense-date__month ">
                {month}
            </div>
            <div className="expense-date__year">
                {year}
            </div>
        </Card>
    );
}

export default ExpensDate;