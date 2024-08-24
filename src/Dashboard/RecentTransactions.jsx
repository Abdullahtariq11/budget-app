import React from 'react';
import './RecentTransactions.css';

const RecentTransactions = () => {
  return (
    <div className="recent-transactions">
      <h3>Recent Transactions</h3>
      <ul>
        <li>
          <span>Salary</span>
          <span>$3000</span>
          <span>01/08/2024</span>
        </li>
        <li>
          <span>Groceries</span>
          <span>$150</span>
          <span>02/08/2024</span>
        </li>
        <li>
          <span>Rent</span>
          <span>$1000</span>
          <span>03/08/2024</span>
        </li>
      </ul>
    </div>
  );
};

export default RecentTransactions;