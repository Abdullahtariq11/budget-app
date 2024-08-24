import React from 'react';
import './IncomeSection.css';

const IncomeSection = () => {
  return (
    <div className="finance-section">
      <h2>Income</h2>
      <form className="finance-form">
        <input type="text" placeholder="Source" />
        <input type="number" placeholder="Amount" />
        <input type="date" />
        <button type="submit">Add Income</button>
      </form>
      <div className="finance-history">
        <h3>Income History</h3>
        <ul>
          <li>Salary - $3000 - 01/08/2024</li>
          <li>Freelance - $500 - 02/08/2024</li>
        </ul>
      </div>
    </div>
  );
};

export default IncomeSection;