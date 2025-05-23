import React, { useState } from "react";
import './refundHistory.css';
import useScreenWidth from "../../../hooks/screenWidth";
import { motion, useInView } from "framer-motion";

export const RefundHistory = () => {
    const refOne = React.useRef(null);
    const inViewOne = useInView(refOne, { triggerOnce: false });
    // ------------------------------
    const screenWidth = useScreenWidth()


    const refundOrders = [
        {
            orderNumber: "#1020",
            status: "Rejected",
            reason: 'Item was damaged . also fabric was not good as expected',
            creadedAt: '21 Jun 2024'
        },
        {
            orderNumber: "#1020",
            status: "Rejected",
            reason: 'Item was damaged . also fabric was not good as expected',
            creadedAt: '21 Jun 2024'
        },

    ];

    const [currentPage, setCurrentpage] = useState(0);
    const [rowPerPage, setRowPerPage] = useState(5);

    const indexOflastRow = (currentPage + 1) * rowPerPage;
    const indexOfFirstRow = indexOflastRow - rowPerPage;
    const currentRows = refundOrders.slice(indexOfFirstRow, indexOflastRow);
    const totalPages = Math.ceil(refundOrders.length / rowPerPage);

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
        <motion.div
            ref={refOne}
            initial={{ opacity: 0, x: -100 }}
            animate={inViewOne ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: .8 }}
            className="refund_myOrder">
            <div>
                <span className="refund_myOrder_text">Refund History</span>
            </div>
            <div className="refund_table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Order </th>
                            <th>status</th>
                            <th>Reason</th>
                            <th>CreadetAt Status</th>



                        </tr>

                    </thead>
                    <tbody>
                        {currentRows.map((item, index) => (
                            <tr>
                                <td>{item.orderNumber}</td>
                                <td>{item.status}</td>
                                <td>{item.reason}</td>
                                <td>{item.creadedAt}</td>




                            </tr>
                        ))}

                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="6">
                                <div className="refund_pagination-controls">
                                    <div style={{ width: screenWidth <= 430 ? '50%' : '25%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <label>Rows per page :  </label>
                                        <select value={rowPerPage} onChange={handleRowperPageChange} >
                                            <option value={5}>5</option>
                                            <option value={10}>10</option>
                                            <option value={25}>25</option>
                                        </select>
                                    </div>
                                    <div style={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'space-evenly',
                                        padding: '10px'
                                    }}>
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
        </motion.div >

    )
}
