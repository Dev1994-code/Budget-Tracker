/*import React, {useContext, useState} from 'react'
import { ExpenseItem } from './ExpenseItem';
import { AppContext } from '../context/AppContext';

export const ExpenseList = () => {
  const {expenses} = useContext(AppContext);

  const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

  const handleChange = (event) => {
    const searchResults = expenses.filter((filteredExpense) => {
      filteredExpense.name.toLowerCase().includes(event.target.value.toLowerCase())
      
    })
    setFilteredExpenses(searchResults);
  }
  
  return (
    <>
    <input
      type='text'
      className='form-control mb-2 mr-sm-2'
      placeholder='Type to search...'
      onChange={handleChange}
    />

      <ul className='list-group mt-3 mb-3'>
        {expenses.map((expense) => (
            <ExpenseItem 
                id={expense.id}
                name={expense.name}
                cost={expense.cost}
            />
        ))}
    </ul>
    </>
  )
}*/


import React, { useContext, useState } from 'react';
import { ExpenseItem } from './ExpenseItem';
import { AppContext } from '../context/AppContext';

export const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

  const handleChange = (event) => {
    const searchResults = expenses.filter((filteredExpense) =>
      filteredExpense.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredExpenses(searchResults);
  };

  return (
    <>
      <input
        type='text'
        className='form-control mb-2 mr-sm-2'
        placeholder='Type to search...'
        onChange={handleChange}
      />

      <ul className='list-group mt-3 mb-3'>
        {filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} name={expense.name} cost={expense.cost} />
        ))}
      </ul>
    </>
  );
};


