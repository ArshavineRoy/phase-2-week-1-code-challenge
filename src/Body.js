import React, { useState, useEffect } from "react";
import Search from "./Search";
import Transactions from "./Transactions";
import Form from "./Form";

function Body() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:3000/transactions")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching data.");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div>
      <Search />
      <Transactions data={data} />
      <Form />
    </div>
  );
}

export default Body;
