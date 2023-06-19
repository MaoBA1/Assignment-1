import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
    const formSubmitHandler = (enterdExpenseData) => {
        const expenseData = {
            ...enterdExpenseData,
            id: Math.random()
        }
        props.onNewExpenseSubmitted(expenseData)
    }

    return (  
        <div className="new-expense">
            <ExpenseForm onFormSubimted={formSubmitHandler}/>
        </div>
    );
}

export default NewExpense;