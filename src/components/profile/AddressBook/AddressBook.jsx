import React from "react";
import "./addressBook.css";

const addressList = [
  {
    name: "John Due",
    tag: "New Home",
    address: "26, Starts Hollow Colony, Denver, Colorado, United States 80014",
    phone: "+1 5551855359",
  },
  {
    name: "John Due",
    tag: "Old Home",
    address: "53B, Claire New Street, San Jose, United States 94088",
    phone: "+1 5551855359",
  },
  {
    name: "John Due",
    tag: "Office",
    address: "21B, Row New Street, San Jose, California, United States 94088",
    phone: "+1 551865359",
  },
];

export const AddressBook = () => {
  return (
    <div className="address-book">
      <div className="header">
        <h2>Address Book</h2>
        <button className="add-btn">+ Add New</button>
      </div>
      <div className="card-list">
        {addressList.map((item, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <strong>{item.name}</strong>
              <span className="tag">{item.tag}</span>
            </div>
            <p>{item.address}</p>
            <p>Phone: {item.phone}</p>
            <hr />
            <div className="card-actions">
              <button className="action-btn">Edit</button>
              <button className="action-btn">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


