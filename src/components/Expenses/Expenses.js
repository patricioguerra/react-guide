import { useState } from 'react';
import './Expenses.css';
import ExpensesFilter from '../filter/ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

  const [enteredFilter, setEnteredFilter] = useState('2022');

  const filterChangeHandler = (enteredFilter) => {
    setEnteredFilter(enteredFilter);
  }

  const filteredExpenses = props.data.filter(expense => {
    return expense.date.getFullYear().toString() === enteredFilter;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={enteredFilter} onFilterChange={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList data={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;