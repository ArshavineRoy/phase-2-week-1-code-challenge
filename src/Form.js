import React from "react";

function Form() {
  return (
    <>
      <div className="container mt-5 add-transaction-div">
        <form className="add-transaction-form">
          <h4>Add a transaction</h4>
          <div className="form-group">
            <label for="dateInput">Date</label>
            <input
              type="date"
              className="form-control"
              id="dateInput"
              placeholder="Date"
            />
          </div>
          <div className="form-group">
            <label for="descriptionInput">Description</label>
            <input
              type="text"
              className="form-control"
              id="descriptionInput"
              placeholder="Description"
            />
          </div>
          <div className="form-group">
            <label for="categoryInput">Category</label>
            <input
              type="text"
              className="form-control"
              id="categoryInput"
              placeholder="Category"
            />
          </div>
          <div className="form-group">
            <label for="amountInput">Amount</label>
            <input
              type="number"
              className="form-control"
              id="amountInput"
              placeholder="Amount"
            />
          </div>
          <button type="submit" className="btn btn-primary form-submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
