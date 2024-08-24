import React from 'react';
import './BudgetsSection.css';

const BudgetsSection = () => {
  return (
    <div className="finance-section">
      <h2>Budgets</h2>
      <form className="finance-form">
        <input type="text" placeholder="Category" />
        <input type="number" placeholder="Budget Amount" />
        <input type="date" placeholder="Start Date" />
        <input type="date" placeholder="End Date" />
        <button type="submit">Create Budget</button>
      </form>
      <div className="finance-history">
        <h3>Budget Overview</h3>
        <ul>
          <li>Groceries - $200 / $500</li>
          <li>Entertainment - $50 / $100</li>
        </ul>
      </div>
    </div>
  );
};

export default BudgetsSection;