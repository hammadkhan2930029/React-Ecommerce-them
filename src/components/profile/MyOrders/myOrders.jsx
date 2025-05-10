import React, { useState } from "react";
import './myOrder.css';
import useScreenWidth from "../../../hooks/screenWidth";

export const MyOrders = () => {
    const screenWidth = useScreenWidth()


   const orders = [
    {
        orderNumber: "#1025",
        date: "10 May 2025 11:10 AM",
        amount: 54.89,
        paymentStatus: "Paid",
        paymentMethod: "Credit Card"
    },
    {
        orderNumber: "#1024",
        date: "09 May 2025 02:45 PM",
        amount: 23.60,
        paymentStatus: "Pending",
        paymentMethod: "PayPal"
    },
    {
        orderNumber: "#1023",
        date: "08 May 2025 09:35 AM",
        amount: 78.45,
        paymentStatus: "Cancelled",
        paymentMethod: "UPI"
    },
    {
        orderNumber: "#1022",
        date: "07 May 2025 05:10 PM",
        amount: 99.99,
        paymentStatus: "Paid",
        paymentMethod: "COD"
    },
    {
        orderNumber: "#1021",
        date: "06 May 2025 12:00 PM",
        amount: 10.50,
        paymentStatus: "Pending",
        paymentMethod: "Bank Transfer"
    },
    {
        orderNumber: "#1020",
        date: "05 May 2025 04:15 PM",
        amount: 31.00,
        paymentStatus: "Failed",
        paymentMethod: "Credit Card"
    },
    {
        orderNumber: "#1019",
        date: "04 May 2025 03:25 PM",
        amount: 45.67,
        paymentStatus: "Paid",
        paymentMethod: "PayPal"
    },
    {
        orderNumber: "#1018",
        date: "03 May 2025 10:45 AM",
        amount: 26.40,
        paymentStatus: "Pending",
        paymentMethod: "COD"
    },
    {
        orderNumber: "#1017",
        date: "02 May 2025 01:15 PM",
        amount: 72.33,
        paymentStatus: "Paid",
        paymentMethod: "Debit Card"
    },
    {
        orderNumber: "#1016",
        date: "01 May 2025 06:30 PM",
        amount: 19.99,
        paymentStatus: "Cancelled",
        paymentMethod: "UPI"
    },
    {
        orderNumber: "#1015",
        date: "30 Apr 2025 08:00 AM",
        amount: 38.88,
        paymentStatus: "Paid",
        paymentMethod: "Bank Transfer"
    },
    {
        orderNumber: "#1014",
        date: "29 Apr 2025 09:50 PM",
        amount: 67.25,
        paymentStatus: "Failed",
        paymentMethod: "COD"
    },
    {
        orderNumber: "#1013",
        date: "28 Apr 2025 11:30 AM",
        amount: 12.00,
        paymentStatus: "Paid",
        paymentMethod: "Credit Card"
    },
    {
        orderNumber: "#1012",
        date: "27 Apr 2025 03:20 PM",
        amount: 84.10,
        paymentStatus: "Pending",
        paymentMethod: "PayPal"
    },
    {
        orderNumber: "#1011",
        date: "26 Apr 2025 07:05 PM",
        amount: 91.35,
        paymentStatus: "Paid",
        paymentMethod: "COD"
    }
];


    const [currentPage, setCurrentpage] = useState(0);
    const [rowPerPage, setRowPerPage] = useState(5);

    const indexOflastRow = (currentPage + 1) * rowPerPage;
    const indexOfFirstRow = indexOflastRow - rowPerPage;
    const currentRows = orders.slice(indexOfFirstRow, indexOflastRow);
    const totalPages = Math.ceil(orders.length / rowPerPage);

    const handlePrevPage = () => {
        setCurrentpage((prev) => Math.max(prev - 1, 0))
    }
    const handleNextpage = () => {
        setCurrentpage((prev) => Math.min(prev + 1, totalPages - 1))
    }
    const handleRowperPageChange = (e) => {
        setRowPerPage(Number(e.target.value));
        setCurrentpage(0);
    }

    return (
        <div className="myOrder">
            <div>
                <span className="myOrder_text">My Orders</span>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Order Number</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Payment Status</th>
                            <th>Payment Method</th>
                            <th>Option</th>


                        </tr>

                    </thead>
                    <tbody>
                        {currentRows.map((item, index) => (
                            <tr>
                                <td>{item.orderNumber}</td>
                                <td>{item.date}</td>
                                <td>{item.amount}</td>
                                <td>{item.paymentStatus}</td>
                                <td>{item.paymentMethod}</td>
                                <td>setting</td>



                            </tr>
                        ))}

                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="6">
                                <div className="pagination-controls">
                                    <div style={{ width: '25%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <label>Rows per page :  </label>
                                        <select value={rowPerPage} onChange={handleRowperPageChange} >
                                            <option value={5}>5</option>
                                            <option value={10}>10</option>
                                            <option value={25}>25</option>
                                        </select>
                                    </div>
                                    <div>
                                        <button onClick={handlePrevPage} disabled={currentPage === 0}>
                                            Prev
                                        </button>
                                        <span style={{ margin: '0 10px' }}>
                                            Page {currentPage + 1} of {totalPages}
                                        </span>
                                        <button onClick={handleNextpage} disabled={currentPage >= totalPages - 1}>
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

    )
}
