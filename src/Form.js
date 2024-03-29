import React, { useState } from "react";

function Form({ addTransaction }) {
  // State variables to store form data
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create a new transaction object with the form data
    const newTransaction = {
      date,
      description,
      category,
      amount: Number(amount),
    };

    // Check if the response is successful (status code 200s)
    try {
      // Make an HTTP POST request to the server's API to add the new transaction
      const response = await fetch(
        "https://bank-of-flatiron-server.onrender.com/transactions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTransaction),
        }
      );

      if (!response.ok) {
        throw new Error("Error adding transaction.");
      }

      // Parse the response data as JSON
      const data = await response.json();

      // Call the addTransaction function to update the data state with the new transaction
      addTransaction(data);

      // Reset form fields after form submission
      setDate("");
      setDescription("");
      setCategory("");
      setAmount("");
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  // Render the form with input fields for date, description, category, and amount
  return (
    <>
      <div className="container mt-5 add-transaction-div">
        <form className="add-transaction-form" onSubmit={handleSubmit}>
          <h4>Add a transaction</h4>
          <div className="form-group">
            <label htmlFor="dateInput">Date</label>
            <input
              type="date"
              className="form-control"
              id="dateInput"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)} // Update date state on input change
            />
          </div>
          <div className="form-group">
            <label htmlFor="descriptionInput">Description</label>
            <input
              type="text"
              className="form-control"
              id="descriptionInput"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)} // Update description state on input change
            />
          </div>
          <div className="form-group">
            <label htmlFor="categoryInput">Category</label>
            <input
              type="text"
              className="form-control"
              id="categoryInput"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)} // Update category state on input change
            />
          </div>
          <div className="form-group">
            <label htmlFor="amountInput">Amount</label>
            <input
              type="number"
              className="form-control"
              id="amountInput"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)} // Update amount state on input change
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
