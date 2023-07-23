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
    fetch("http://localhost:3000/transactions")
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

  return (
    <div>
      {/* Render the Search component and pass 'handleSearch' function as 'onSearch' prop */}
      <Search onSearch={handleSearch} />

      {/* Render the Transactions component and pass 'filteredData' as 'data' prop */}
      <Transactions data={filteredData} />

      {/* Render the Form component */}
      <Form addTransaction={addTransaction} />
    </div>
  );
}

export default Body;
