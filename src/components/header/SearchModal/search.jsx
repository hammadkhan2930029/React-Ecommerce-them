import React, { useState } from "react";
import "./search.css";

const SearchModal = ({ visible, onClose }) => {
  const [search, setSearch] = useState("");

  if (!visible) return null;

  return (
    <div className="overlay">
      <div className="modal-box">
        {/* Header */}
        <div className="modal-header">
          <h3>Search in store</h3>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Search Box */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="search-btn">🔍</button>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
