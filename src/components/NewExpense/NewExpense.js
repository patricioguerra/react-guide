import {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);

    }

    const startEditingHandler = () =>{
        setIsEditing(true);
    }
 
    const cancelEditingHandler = () =>{
        setIsEditing(false);
    }

    return (
        <div className='new-expense'>
            {isEditing 
                ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelButtonClicked={cancelEditingHandler}/>
                : <button onClick={startEditingHandler}>Add New Expense</button> 
            }
        </div>
    );
};

export default NewExpense;