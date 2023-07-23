import React, { useState } from "react";

// The Search component receives onSearch prop function

function Search({ onSearch }) {
  // Initialize the searchTerm state variable using the useState hook
  const [searchTerm, setSearchTerm] = useState("");

  // handleChange function called while a user is typing into the search bar
  const handleChange = (e) => {
    // Get the current value of the search input
    const term = e.target.value;

    // Update the searchTerm state with the current value
    setSearchTerm(term);

    /* Call onSearch prop with the current search term as an arg, passig it 
    back to Body component for filtering */

    onSearch(term);
    onSearch(term);
  };

  return (
    <div className="container-fluid">
      <form className="d-flex search-bar">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search transactions by description "
          aria-label="Search"
          value={searchTerm} // The search input value is bound to the searchTerm state
          onChange={handleChange} // handleChange function used for real-time search
        />
      </form>
    </div>
  );
}

export default Search;
