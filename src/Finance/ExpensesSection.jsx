import React from 'react';
import './ExpensesSection.css';

const ExpensesSection = () => {
  return (
    <div className="finance-section">
      <h2>Expenses</h2>
      <form className="finance-form">
        <input type="text" placeholder="Category" />
        <input type="number" placeholder="Amount" />
        <input type="date" />
        <button type="submit">Add Expense</button>
      </form>
      <div className="finance-history">
        <h3>Expense History</h3>
        <ul>
          <li>Groceries - $150 - 02/08/2024</li>
          <li>Rent - $1000 - 03/08/2024</li>
        </ul>
      </div>
    </div>
  );
};

export default ExpensesSection;