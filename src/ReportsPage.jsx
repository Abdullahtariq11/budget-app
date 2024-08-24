import React from 'react';

import './ReportsPage.css';
import Header from './Dashboard/Header';
import IncomeVsExpensesReport from './Reports/IncomeVsExpensesReport';
import SpendingByCategoryReport from './Reports/SpendingByCategoryReport';
import BudgetUsageReport from './Reports/BudgetUsageReport';
import Footer from './Dashboard/Footer';

const ReportsPage = () => {
  return (
    <div className="reports-page">
      <Header/>
      <div className="reports-content">
        <IncomeVsExpensesReport/>
        <SpendingByCategoryReport/>
        <BudgetUsageReport/>
      </div>
      <Footer />
    </div>
  );
};

export default ReportsPage;