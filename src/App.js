import { useState } from 'react';
import AccessPage from './AccessPage';
import './App.css';
import DashboardPage from './DashboardPage';
import FinancePage from './FinancePage';
import ReportsPage from './ReportsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AccessPage isLogin={isLogin} setIsLogin={setIsLogin}/>}/>
          <Route path="/DashboardPage" element={<DashboardPage />} />
          <Route path="/FinancePage" element={<FinancePage />} />
          <Route path="/ReportsPage" element={<ReportsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;