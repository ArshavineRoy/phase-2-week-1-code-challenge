import React, { useState, useEffect } from "react";
import Search from "./Search";
import Transactions from "./Transactions";
import Form from "./Form";

function Body() {
  // State variables to manage API data and search term
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect hook to fetch data when the component mounts (when page loads)
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data from the server
  const fetchData = () => {
    fetch("https://bank-of-flatiron-server.onrender.com/transactions")
      .then((response) => {
        if (!response.ok) {
          // handle errors on fetch
          throw new Error("Error fetching data.");
        }
        return response.json();
      })
      .then((data) => {
        // Set the fetched data in the state variable 'data'
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // Function to handle the search input from the Search component
  const handleSearch = (term) => {
    // Set the search term in the state variable 'searchTerm'
    setSearchTerm(term);
  };

  // Filter the data based on the search term
  const filteredData = data.filter((transaction) =>
    transaction.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to add a new transaction to the data state
  const addTransaction = (newTransaction) => {
    // Create a copy of the current data state and add the newTransaction
    setData((prevData) => [...prevData, newTransaction]);
  };

  // Function to delete a transaction from the server and update the data state
  const deleteTransaction = async (id) => {
    try {
      // Make an HTTP DELETE request to the server's API to delete the transaction
      const response = await fetch(
        `https://bank-of-flatiron-server.onrender.com/transactions/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Error deleting transaction.");
      }

      // Update the data state by filtering out the deleted transaction
      setData((prevData) =>
        prevData.filter((transaction) => transaction.id !== id)
      );
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  return (
    <div className="main-body">
      {/* Render the Search component and pass 'handleSearch' function as 'onSearch' prop */}
      <Search onSearch={handleSearch} />

      {/* Render the Transactions component and pass 'filteredData' as 'data' prop */}
      <Transactions
        data={filteredData}
        onDeleteTransaction={deleteTransaction}
      />

      {/* Render the Form component */}
      <Form addTransaction={addTransaction} />
    </div>
  );
}

export default Body;
