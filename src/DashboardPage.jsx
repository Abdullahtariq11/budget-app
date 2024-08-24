import React from 'react'
import Header from './Dashboard/Header'
import SummaryCard from './Dashboard/SummaryCard'
import Charts from './Dashboard/Charts'
import RecentTransactions from './Dashboard/RecentTransactions'
import QuickActions from './Dashboard/QuickActions'
import Footer from './Dashboard/Footer'
import './DashboardPage.css'

function DashboardPage() {
  return (
    <div className='dashboard-container'>
        <Header/>
        <div className="dashboard-content">
            <SummaryCard/>
            <Charts/>
            <RecentTransactions/>
            <QuickActions/>
        </div>
        <Footer/>
    </div>
  )
}

export default DashboardPage