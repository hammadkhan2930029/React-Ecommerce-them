import * as React from 'react';
import { styled } from '@mui/system';
import {
    TablePagination,
    tablePaginationClasses as classes,
} from '@mui/base/TablePagination';
import TollOutlinedIcon from '@mui/icons-material/TollOutlined';
import useScreenWidth from '../../../hooks/screenWidth';
import { motion, useInView } from "framer-motion";



const paginationButtonStyle = (disabled) => ({
    padding: '6px 12px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: disabled ? '#f0f0f0' : 'var(--text-hover-color)',
    color: disabled ? '#999' : '#fff',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'background-color 0.3s ease',
    minWidth: '70px',
});


export const EarningPoints = () => {
    const refOne = React.useRef(null);
    const inViewOne = useInView(refOne, { triggerOnce: false });
    // ------------------------------
    const screenWidth = useScreenWidth()
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <motion.div
            ref={refOne}
            initial={{ opacity: 0, x: -100 }}
            animate={inViewOne ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: .8 }}>
            <div style={{ backgroundColor: '#f9f9f9', padding: 20, marginBottom: 15, borderRadius: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ backgroundColor: '#fff', padding: 10 }}>

                        <TollOutlinedIcon style={{ fontSize: '54px', color: 'var(--text-hover-color)' }} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 10 }}>
                        <span style={{ fontSize: 24, fontFamily: 'sans-serif' }}>Total Points</span>
                        <span style={{ fontSize: 26, fontWeight: 700, color: 'var(--text-hover-color)' }}>1970</span>
                    </div>
                </div>
                <div style={{ backgroundColor: '#fff', padding: 10 }}>
                    <span> 1 Points = $0.03 Balance</span>
                </div>

            </div>

            <Root sx={{ width: '100%' }}>
                <table aria-label="custom pagination table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Points</th>
                            <th>Remark</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(rowsPerPage > 0
                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : rows
                        ).map((row, index) => (
                            <tr key={index} className="data-row">
                                <td>{row.date}</td>
                                <td>{row.amount}</td>
                                <td>{row.remark}</td>
                                <td>
                                    <StatusBadge status={row.status}>
                                        {row.status}
                                    </StatusBadge>
                                </td>
                            </tr>
                        ))}
                        {emptyRows > 0 && (
                            <tr style={{ height: 41 * emptyRows }}>
                                <td colSpan={4} aria-hidden />
                            </tr>
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={4} style={{ padding: '0', backgroundColor: '#f9fafb' }}>
                                <div style={{
                                    padding: screenWidth <= 430 ? '6px' : '16px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    borderTop: '1px solid #e0e0e0',
                                    backgroundColor: '#f9fafb',
                                    borderBottomLeftRadius: '8px',
                                    borderBottomRightRadius: '8px',
                                    gap: '1rem'
                                }}>
                                    {/* Rows per page selection */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <label htmlFor="rowsPerPage">Rows per page:</label>
                                        <select
                                            id="rowsPerPage"
                                            value={rowsPerPage}
                                            onChange={handleChangeRowsPerPage}
                                            style={{
                                                padding: '6px 12px',
                                                borderRadius: '6px',
                                                border: '1px solid #ccc',
                                                backgroundColor: '#fff',
                                                fontSize: '14px',
                                                cursor: 'pointer',
                                                outline: 'none',
                                            }}
                                        >
                                            <option value={5}>5</option>
                                            <option value={10}>10</option>
                                            <option value={25}>25</option>
                                            <option value={-1}>All</option>
                                        </select>
                                    </div>

                                    {/* Page controls */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                                        <button
                                            onClick={() => setPage(0)}
                                            disabled={page === 0}
                                            style={paginationButtonStyle(page === 0)}
                                        >
                                            First
                                        </button>
                                        <button
                                            onClick={() => setPage(prev => Math.max(prev - 1, 0))}
                                            disabled={page === 0}
                                            style={paginationButtonStyle(page === 0)}
                                        >
                                            Prev
                                        </button>
                                        <span style={{ fontSize: '14px', fontWeight: 500 }}>
                                            Page {page + 1} of {Math.ceil(rows.length / rowsPerPage)}
                                        </span>
                                        <button
                                            onClick={() => setPage(prev => Math.min(prev + 1, Math.ceil(rows.length / rowsPerPage) - 1))}
                                            disabled={page >= Math.ceil(rows.length / rowsPerPage) - 1}
                                            style={paginationButtonStyle(page >= Math.ceil(rows.length / rowsPerPage) - 1)}
                                        >
                                            Next
                                        </button>
                                        <button
                                            onClick={() => setPage(Math.ceil(rows.length / rowsPerPage) - 1)}
                                            disabled={page >= Math.ceil(rows.length / rowsPerPage) - 1}
                                            style={paginationButtonStyle(page >= Math.ceil(rows.length / rowsPerPage) - 1)}
                                        >
                                            Last
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>



                </table>
            </Root>
        </motion.div>

    );
};

const createData = (date, amount, remark, status) => {
    return { date, amount, remark, status };
};

const rows = [
    createData('10 May 2025 09:10 AM', '$45.60', 'Wallet amount successfully debited for Order #1023', 'Debit'),
    createData('08 May 2025 01:45 PM', '$120.00', 'Admin has credited a bonus to your wallet.', 'Credit'),
    createData('05 May 2025 06:05 PM', '$88.20', 'Wallet amount successfully debited for Order #1019', 'Debit'),
    createData('01 May 2025 04:30 PM', '$150.75', 'Refund processed for Order #1016', 'Credit'),
    createData('28 Apr 2025 11:22 AM', '$63.00', 'Wallet amount successfully debited for Order #1014', 'Debit'),
    createData('25 Apr 2025 07:15 PM', '$200.99', 'Admin has credited your referral reward.', 'Credit'),
    createData('20 Apr 2025 02:55 PM', '$37.50', 'Wallet amount successfully debited for Order #1011', 'Debit'),
];


const grey = {
    50: '#F9FAFB',
    100: '#F3F6F9',
    200: '#E5EAF2',
    300: '#DAE2ED',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
    1000: "#f9f9f9"
};

const Root = styled('div')(
    ({ theme }) => `
  table {
    font-family: 'IBM Plex Sans', sans-serif;

    border-collapse: collapse;
    width: 100%;
    background-color: ${theme.palette.mode === 'dark' ? grey[1000] : '#fff'};
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    border-radius: 8px;
    overflow: hidden;
  }

  th {
    background-color: ${grey[1000]};
    color: ${grey[800]};
    padding: 12px;
    text-align: center;
    font-weight: 600;
    font-size: 1.2rem;

  }

  td {
    padding: 12px;
    text-align: center;
    border-top: 1px solid ${grey[200]};
    font-size: 0.9rem;

  }

  tr.data-row:nth-of-type(odd) {
    background-color: ${grey[50]};
  }

  tr.data-row:hover {
    background-color: ${grey[100]};
    transition: background-color 0.3s ease;
  }
`
);

const StatusBadge = styled('span')(({ status }) => `
  padding: 8px 16px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  color: white;
  background-color: ${status === 'Credit' ? 'var(--text-hover-color)' : '#d32f2f'};
`);

const CustomTablePagination = styled(TablePagination)`
  & .${classes.toolbar} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 16px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.displayedRows} {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.spacer} {
    display: none;
  }

  & .${classes.actions} {
    display: flex;
    gap: 0.25rem;
  }
    `
    ;

