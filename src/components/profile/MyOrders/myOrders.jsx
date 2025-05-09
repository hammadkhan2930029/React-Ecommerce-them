import React, { useState } from "react";
import './myOrder.css';
import useScreenWidth from "../../../hooks/screenWidth";

export const MyOrders = () => {
    const screenWidth = useScreenWidth()


    const orders = [
        {
            orderNumber: "#1020",
            date: "06 Jul 2024 03:51 PM",
            amount: 61.73,
            paymentStatus: "Pending",
            paymentMethod: "COD"
        },
        {
            orderNumber: "#1017",
            date: "06 Jul 2024 03:15 PM",
            amount: 1.97,
            paymentStatus: "Pending",
            paymentMethod: "COD"
        },
        {
            orderNumber: "#1016",
            date: "26 Jun 2024 10:23 AM",
            amount: 46.14,
            paymentStatus: "Pending",
            paymentMethod: "COD"
        },
        {
            orderNumber: "#1015",
            date: "25 Jun 2024 06:34 PM",
            amount: 18.75,
            paymentStatus: "Pending",
            paymentMethod: "COD"
        },
        {
            orderNumber: "#1013",
            date: "24 Jun 2024 02:29 PM",
            amount: 1.72,
            paymentStatus: "Pending",
            paymentMethod: "COD"
        },
        {
            orderNumber: "#1020",
            date: "06 Jul 2024 03:51 PM",
            amount: 61.73,
            paymentStatus: "Pending",
            paymentMethod: "COD"
        },
        {
            orderNumber: "#1017",
            date: "06 Jul 2024 03:15 PM",
            amount: 1.97,
            paymentStatus: "Pending",
            paymentMethod: "COD"
        },
        {
            orderNumber: "#1016",
            date: "26 Jun 2024 10:23 AM",
            amount: 46.14,
            paymentStatus: "Pending",
            paymentMethod: "COD"
        },
        {
            orderNumber: "#1015",
            date: "25 Jun 2024 06:34 PM",
            amount: 18.75,
            paymentStatus: "Pending",
            paymentMethod: "COD"
        },
        {
            orderNumber: "#1013",
            date: "24 Jun 2024 02:29 PM",
            amount: 1.72,
            paymentStatus: "Pending",
            paymentMethod: "COD"
        },
        {
            orderNumber: "#1020",
            date: "06 Jul 2024 03:51 PM",
            amount: 61.73,
            paymentStatus: "Pending",
            paymentMethod: "COD"
        },
        {
            orderNumber: "#1017",
            date: "06 Jul 2024 03:15 PM",
            amount: 1.97,
            paymentStatus: "Pending",
            paymentMethod: "COD"
        },
        {
            orderNumber: "#1016",
            date: "26 Jun 2024 10:23 AM",
            amount: 46.14,
            paymentStatus: "Pending",
            paymentMethod: "COD"
        },
        {
            orderNumber: "#1015",
            date: "25 Jun 2024 06:34 PM",
            amount: 18.75,
            paymentStatus: "Pending",
            paymentMethod: "COD"
        },
        {
            orderNumber: "#1013",
            date: "24 Jun 2024 02:29 PM",
            amount: 1.72,
            paymentStatus: "Pending",
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
