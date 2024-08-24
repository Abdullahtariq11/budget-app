import React, { useState } from 'react'
import Header from './Dashboard/Header'
import IncomeSection from './Finance/IncomeSection'
import ExpensesSection from './Finance/ExpensesSection'
import BudgetsSection from './Finance/BudgetsSection'

import './FinancePage.css';
import Footer from './Dashboard/Footer'

const FinancePage = () => {
  const [activeTab, setActiveTab] = useState('income');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'income':
        return <IncomeSection />;
      case 'expenses':
        return <ExpensesSection />;
      case 'budgets':
        return <BudgetsSection />;
      default:
        return <IncomeSection />;
    }
  };

  return (
    <div className="finance-page">
      <Header />
      <div className="tabs">
        <button className={activeTab === 'income' ? 'active' : ''} onClick={() => setActiveTab('income')}>Income</button>
        <button className={activeTab === 'expenses' ? 'active' : ''} onClick={() => setActiveTab('expenses')}>Expenses</button>
        <button className={activeTab === 'budgets' ? 'active' : ''} onClick={() => setActiveTab('budgets')}>Budgets</button>
      </div>
      <div className="tab-content">
        {renderActiveTab()}
      </div>
      <Footer />
    </div>
  );
};

export default FinancePage;