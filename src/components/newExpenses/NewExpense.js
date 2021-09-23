import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddNewExpense }) => {
    const newExpenseHandler = (newExpense) => {
        const enteredExpense = {
            ...newExpense,
            id: Math.random().toString()
        }
        onAddNewExpense(enteredExpense)
    }
    return (
        <div className="new-expense">
            <ExpenseForm onExpenseSubmit={newExpenseHandler} />
        </div>
    )
}

export default NewExpense;