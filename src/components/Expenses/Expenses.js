import './Expenses.css'
import ExpenseItem from "./ExpenseItem.js"; 
import Card from '../UI/Card.js'
import ExpenseFilter from './ExpenseFilter.js';
import { useState } from 'react';


function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2023')
    const filterChangerHandler = (selectedYear) =>{
      setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.expenses.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
  });
  //   const expenses = [
  //   { id: "1", date: new Date(2023, 7, 15), title: "Insurance", price: 100 },
  //   { id: "2", date: new Date(2023, 3, 25), title: "Book", price: 10 },
  //   { id: "3", date: new Date(2023, 10, 11), title: "Pen", price: 1 },
  //   { id: "4", date: new Date(2023, 1, 14), title: "Laptop", price: 200 },
  // ];

  return(
    <Card className='expenses'>
    <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangerHandler} />
      {filteredExpenses.length === 0 ? <p style={{ color: 'red' }}>No expenses found</p> : filteredExpenses.map((expense) => 
        (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.price}
          ></ExpenseItem>
      )
      )}
    </Card>
  )
}

export default Expenses;