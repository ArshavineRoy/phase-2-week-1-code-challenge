import React from "react";

function Transactions({ data }) {
  return (
    <>
      <div className="table-description">
        <h4>Below is a list of all your transactions</h4>
      </div>
      <div className="transactions">
        <table className="table table-striped">
          <thead>
            <tr className="table-primary">
              <th scope="col">No.</th>
              <th scope="col">Date</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((transaction) => (
              <tr className="table-success" key={transaction.id}>
                <th scope="row">{transaction.id}</th>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Transactions;
