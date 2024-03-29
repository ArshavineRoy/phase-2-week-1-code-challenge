import React from "react";

function Transactions({ data, onDeleteTransaction }) {
  const handleDelete = (id) => {
    // Call the onDeleteTransaction function with the id of the transaction to be deleted
    onDeleteTransaction(id);
  };

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
              <th className="delete-header" scope="col">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Conditional ternary operator to check if the data array has data or is empty (no search term found)
          and render the table accordingly */}

            {/* Render message if no transactions found */}

            {data.length === 0 ? (
              <tr className="table-danger">
                <td colSpan="5">
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
                  <td className="delete-container">
                    {" "}
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(id)} // Call handleDelete function with the transaction id on button click
                    >
                      Delete
                    </button>
                  </td>
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
