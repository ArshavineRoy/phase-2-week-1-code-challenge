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
            {data.map(({ id, date, description, category, amount }) => (
              <tr className="table-success" key={id}>
                <td>{date}</td>
                <td>{description}</td>
                <td>{category}</td>
                <td>{amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transactions;
