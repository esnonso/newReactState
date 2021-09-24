import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddNewExpense }) => {
    const [showForm, setShowForm] = useState(false)

    const newExpenseHandler = (newExpense) => {
        const enteredExpense = {
            ...newExpense,
            id: Math.random().toString()
        }
        onAddNewExpense(enteredExpense)
        showFormHandler()
    }

    const showFormHandler = () => {
        setShowForm(!showForm)
    }
    return (
        <div className="new-expense">
            {showForm === false ?
                <button onClick={showFormHandler}>Add New Expense</button> :
                <ExpenseForm onExpenseSubmit={newExpenseHandler} onCancel={showFormHandler} />
            }
        </div>
    )
}

export default NewExpense;