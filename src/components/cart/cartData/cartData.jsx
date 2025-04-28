import React, { useEffect, useState } from "react";
import { AppImages } from "../../../constants/AppImages";
import "./cartData.css";
import { motion, useInView } from "framer-motion";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from "react-router-dom";



export const CartData = () => {

    const navigate = useNavigate()
       const[count,setCount]=useState(1)
    const [currentPage,setCurrentPage]=useState(1)
    const itemsPerPage = 3

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    //   --------------------------------------------
    const cartItems = [
        {
            id: 1,
            name: "Orange Coords ",
            price: 115.000,
            quantity: 4,
            image: AppImages.cardimg1
        },
        {
            id: 2,
            name: "Tan Shorts",
            price: 9,
            originalPrice: 12.00,
            quantity: 3,
            image: AppImages.cardimg3,
            savings: 2.04
        },
        {
            id: 3,
            name: "Gym Coords Set ",
            price: 3.00,
            quantity: 1,
            image: AppImages.cardimg4
        },
        {
            id: 1,
            name: "Coords Set",
            price: 5.00,
            quantity: 4,
            image: AppImages.cardimg1
        },
        {
            id: 2,
            name: "Tan Shorts",
            price: 2.96,
            originalPrice: 12.00,
            quantity: 3,
            image: AppImages.cardimg3,
            savings: 2.04
        },
        {
            id: 3,
            name: "Gym  Set (Brown)",
            price: 10.00,
            quantity: 1,
            image: AppImages.cardimg4
        },
    ];

    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);
    }
    //----------pagination logic-----------

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = cartItems.slice(indexOfFirstItem,indexOfLastItem)
    const totalPages =Math.ceil(cartItems.length / itemsPerPage)

    const nextPage = ()=>{
        if(currentPage < totalPages){
            setCurrentPage(currentPage + 1)
        }
    }
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    return (
        <>
            <motion.div className="cart-container"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .8 }}>
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map(item => (
                            <tr key={item.id}>
                                <td><img src={item.image} alt={item.name} className="cart-image" /></td>
                                <td>{item.name}</td>
                                <td>
                                    <div>
                                        <strong>${item.price.toFixed(2)}</strong><br />
                                        {item.originalPrice && (
                                            <>
                                                <span className="original-price">${item.originalPrice.toFixed(2)}</span><br />
                                                <span className="savings">You Save : ${item.savings.toFixed(2)}</span>
                                            </>
                                        )}
                                    </div>
                                </td>
                                <td>
                                    <div className="quantity-control">
                                        <button disabled={count == 1} onClick={()=> setCount(count - 1)}><ArrowBackIosOutlinedIcon style={{ fontSize: '15px' }} /></button>
                                        <span>{count}</span>
                                        <button onClick={()=> setCount(count + 1)}>< ArrowForwardIosOutlinedIcon style={{ fontSize: '15px' }} /></button>
                                    </div>
                                </td>
                                <td className="item-total">${(item.price * item.quantity).toFixed(2)}</td>
                                <td>
                                    <button className="remove-button"><ClearIcon style={{ fontSize: '20px' }}/></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                   {/* Pagination buttons */}
                   <div style={{ display: "flex", justifyContent: "end", marginTop: "20px", gap: "10px" }}>
                    <button onClick={prevPage} disabled={currentPage === 1} className="continue-button">Previous</button>
                    <button onClick={nextPage} disabled={currentPage === totalPages} className="checkout-button">Next</button>
                </div>

                <div className="total-price">
                    <strong>Total Price: </strong> <span>${calculateTotal()}</span>
                </div>

                <div className="cart-actions">
                    <button className="continue-button" onClick={()=> navigate('/')}>Continue Shopping</button>
                    <button className="checkout-button" onClick={()=> navigate('/checkOut')}>Check Out</button>
                </div>
            </motion.div>
        </>
    );
}
