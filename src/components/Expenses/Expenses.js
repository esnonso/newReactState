import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import Chart from '../expensesChart/Chart';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2020')

    const filterExpenses = (selectedYearInput) => {
        setSelectedYear(selectedYearInput)
    }

    const filteredExpenses = props.items.filter(expenses => (
        expenses.date.getFullYear().toString() === selectedYear
    ))

    return (
        <Card className="expenses">
            <ExpensesFilter selected={selectedYear} onFilter={filterExpenses} />

            <Chart expenses={filteredExpenses} />

            {filteredExpenses.length === 0 ?
                <h2>No Items found</h2> :
                filteredExpenses.map(expense => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}

        </Card>
    );
}

export default Expenses;