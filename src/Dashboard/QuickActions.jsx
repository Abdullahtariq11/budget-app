import React from 'react';
import './QuickActions.css';

const QuickActions = () => {
  return (
    <div className="quick-actions">
      <button className="action-button">Add Transaction</button>
      <button className="action-button">Create Budget</button>
    </div>
  );
};

export default QuickActions;