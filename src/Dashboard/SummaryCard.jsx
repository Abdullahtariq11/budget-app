import React from "react";
import './SummaryCards.css';

function SummaryCard() {
  return (
    <div className="summary-cards">
      <div className="card">
        <h3>Current Balance</h3>
        <p>$10,000</p>
      </div>
      <div className="card">
        <h3>Total Income</h3>
        <p>$15,000</p>
      </div>
      <div className="card">
        <h3>Total Expenses</h3>
        <p>$5,000</p>
      </div>
      <div className="card">
        <h3>Budget Overview</h3>
        <p>$8,000 / $10,000</p>
      </div>
    </div>
  );
}

export default SummaryCard;
