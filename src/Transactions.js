import React from "react";

function Transactions() {
  return (
    <>
      <div className="transcations">
        <table className="table table-striped">
          <thead>
            <tr className="table-primary">
              <th scope="col">ID</th>
              <th scope="col">Date</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-success">
              <th scope="row">1</th>
              <td>2019-12-01</td>
              <td>Paycheck from Bob's Burgers</td>
              <td>Income</td>
              <td>1000</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>2019-12-01</td>
              <td>Paycheck from Bob's Burgers</td>
              <td>Income</td>
              <td>1000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Transactions;
