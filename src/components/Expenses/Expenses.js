import { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../filter/ExpensesFilter';
import Card from '../UI/Card';

const Expenses = (props) => {

  const [enteredFilter, setEnteredFilter] = useState('2022');
  const filterChangeHandler = (enteredFilter) =>{
    setEnteredFilter(enteredFilter);
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={enteredFilter} onFilterChange={filterChangeHandler}/>
        {props.data.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)}
      </Card>
    </div>
  );
}

export default Expenses;