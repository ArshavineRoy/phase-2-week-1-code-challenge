import React from "react";

function Transactions({ data }) {
  return (
    <div className="table-container">
      <div className="table-description">
        <h4>The table below is a list of all your transactions</h4>
      </div>
      <div className="transactions">
        <table className="table table-striped">
          <thead>
            <tr className="table-primary">
              <th scope="col">Date</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* Conditional ternary operator to check if the data array has data or is empty (no search term found)
          and render the table accordingly */}

            {/* Render message if no transactions found */}

            {data.length === 0 ? (
              <tr className="table-danger">
                <td colSpan="4">
                  <p className="table-message">
                    No transactions matching that description were found
                  </p>
                </td>
              </tr>
            ) : (
              // Render the data when the page loads or if transactions are found
              data.map(({ id, date, description, category, amount }) => (
                <tr className="table-success" key={id}>
                  <td>{date}</td>
                  <td>{description}</td>
                  <td>{category}</td>
                  <td>{amount}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transactions;
