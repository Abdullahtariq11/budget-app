import React, { useEffect, useState } from "react";
import "./IncomeSection.css";
import placeholderData from'../Common/IncomeData.json';

const IncomeSection = () => {
  const [loading, setLoading] = useState(false);
  const [incomeData, setIncomeData] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5); // Default items per page
  const [currentPage, setCurrentPage] = useState(1); // Default to the first page

  const fetchData = () => {
    setLoading(true);
    /*fetch("http://192.168.1.84:5000/api/transactions?FilterOn=Type&FilterQuery=0")
      .then((response) => response.json())
      .then((data) => setIncomeData(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));*/
      setIncomeData(placeholderData);
      setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter income based on filterText
  const filteredIncome = incomeData.filter((income) =>
    income.category.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="finance-section full-width">
      <h2>Income</h2>
      <form className="finance-form">
        <input type="text" placeholder="Source" />
        <input type="number" placeholder="Amount" />
        <input type="date" />
        <button type="submit">Add Income</button>
      </form>

      <div className="finance-history">
        <h3>Income History</h3>
        <div className="filter-container">
          <input
            type="text"
            placeholder="Filter by Source"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            className="filter-input"
          />
          <button className="fetchButton" onClick={fetchData}>
            Refresh Data
          </button>
        </div>

        {/* Pagination and Items Per Page Controls */}
        <div className="pagination-controls">
          <label htmlFor="itemsPerPage">Show: </label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(parseInt(e.target.value, 10))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>

          <div className="page-navigation">
            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
              Previous
            </button>
            <span>Page {currentPage}</span>
            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={filteredIncome.length < itemsPerPage}>
              Next
            </button>
          </div>
        </div>

        {/* Display Income Data as Colorful Cards */}
        {loading && <p>Loading...</p>}
        {!loading && filteredIncome.length === 0 && <p>No income data available.</p>}
        {!loading && filteredIncome.length > 0 && (
          <div className="income-cards">
            {filteredIncome.map((income) => (
              <div className="income-card" key={income.id}>
                <div className="income-card-header">
                  <h4>Source: {income.category}</h4>
                </div>
                <div className="income-card-body">
                  <p>
                    <strong>Amount:</strong> ${income.amount.toFixed(2)}
                  </p>
                  <p>
                    <strong>Date:</strong> {new Date(income.transactionDate).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>ID:</strong> {income.id}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default IncomeSection;