import './App.css';
import DashboardPage from './DashboardPage';
import FinancePage from './FinancePage';
import ReportsPage from './ReportsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/FinancePage" element={<FinancePage />} />
          <Route path="/ReportsPage" element={<ReportsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;