import React, { useEffect, useState } from "react";
import "./ExpensesSection.css";
import placeholderData from'../Common/ExpenseMockData.json';

const ExpensesSection = () => {
  const [loading, setLoading] = useState(false);
  const [expenseData, setExpenseData] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5); // Default items per page
  const [currentPage, setCurrentPage] = useState(1); // Default to the first page

  const fetchData = () => {
    setLoading(true);
   /* fetch("http://192.168.1.84:5000/api/transactions?FilterOn=Type&FilterQuery=1")
      .then((response) => response.json())
      .then((data) => setExpenseData(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));*/
      setExpenseData(placeholderData);
      setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter expenses based on filterText
  const filteredExpenses = expenseData.filter((expense) =>
    expense.category.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="finance-section">
      <h2>Expenses</h2>
      <form className="finance-form">
        <input type="text" placeholder="Category" />
        <input type="number" placeholder="Amount" />
        <input type="date" />
        <button type="submit">Add Expense</button>
      </form>

      <div className="finance-history">
        <h3>Expense History</h3>
        <div className="filter-container">
          <input
            type="text"
            placeholder="Filter by Category"
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
            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={filteredExpenses.length < itemsPerPage}>
              Next
            </button>
          </div>
        </div>

        {/* Display Expense Data as Colorful Cards */}
        {loading && <p>Loading...</p>}
        {!loading && filteredExpenses.length === 0 && <p>No expense data available.</p>}
        {!loading && filteredExpenses.length > 0 && (
          <div className="expense-cards">
            {filteredExpenses.map((expense) => (
              <div className="expense-card" key={expense.id}>
                <div className="expense-card-header">
                  <h4>Category: {expense.category}</h4>
                </div>
                <div className="expense-card-body">
                  <p>
                    <strong>Amount:</strong> ${expense.amount.toFixed(2)}
                  </p>
                  <p>
                    <strong>Date:</strong> {new Date(expense.transactionDate).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>ID:</strong> {expense.id}
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

export default ExpensesSection;