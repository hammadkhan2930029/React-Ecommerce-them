import React from "react";
import "./addressBook.css";
import { motion, useInView } from "framer-motion";

const addressList = [
  {
    name: "Sarah Thompson",
    tag: "Home",
    address: "1452 Maple Drive, Austin, Texas, United States 73301",
    phone: "+1 5126549871",
  },
  {
    name: "Michael Green",
    tag: "Work",
    address: "9821 Mission Street, San Francisco, California, United States 94110",
    phone: "+1 4152237890",
  },
  {
    name: "Emily Davis",
    tag: "Parents' House",
    address: "402 Lakeview Road, Orlando, Florida, United States 32801",
    phone: "+1 3217746652",
  },
  {
    name: "David Wilson",
    tag: "Vacation Home",
    address: "88 Ocean Breeze Lane, Honolulu, Hawaii, United States 96815",
    phone: "+1 8085559012",
  },
  {
    name: "Aisha Khan",
    tag: "Friend's Place",
    address: "19 Rosewood Avenue, Seattle, Washington, United States 98101",
    phone: "+1 2063331188",
  },
];


export const AddressBook = () => {
  const refOne = React.useRef(null);
  const inViewOne = useInView(refOne, { triggerOnce: false });
  return (
    <motion.div className="address-book"
      ref={refOne}
      initial={{ opacity: 0, x: -100 }}
      animate={inViewOne ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: .8 }}>
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
    </motion.div>
  );
};


