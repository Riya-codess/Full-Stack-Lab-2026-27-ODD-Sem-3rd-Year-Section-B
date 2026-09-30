import React, { useState } from "react";

function SearchFilter() {
  const [search, setSearch] = useState("");

  const names = [
    "Riya",
    "Rahul",
    "Rohan",
    "Priya",
    "Neha",
    "Aman",
    "Anjali",
    "Karan"
  ];

  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Live Search</h2>

      <input
        type="text"
        placeholder="Search name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredNames.length === 0 ? (
        <p>No results found</p>
      ) : (
        <ul>
          {filteredNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchFilter;