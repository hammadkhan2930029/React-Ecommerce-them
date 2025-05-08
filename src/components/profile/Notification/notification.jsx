import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const notifications = [
    {
        id: 1,
        message: 'Your order has been successfully placed. Order ID: #1013. Thank you for choosing us.',
        date: '24 Jun 2024',
        time: '02:29PM',
    },
    {
        id: 2,
        message: 'Your Refund request status has been rejected',
        date: '21 Jun 2024',
        time: '05:42PM',
    },
    {
        id: 3,
        message: 'Your order has been successfully placed. Order ID: #1012. Thank you for choosing us.',
        date: '21 Jun 2024',
        time: '05:18PM',
    },
    {
        id: 4,
        message: 'Your order has been successfully placed. Order ID: #1011. Thank you for choosing us.',
        date: '21 Jun 2024',
        time: '05:18PM',
    },
];

export const NotificationsList = () => {
    return (
        <div style={{width:'100%', padding: 20, backgroundColor: '#f9f9f9', borderRadius: 8 }}>
            <h2 style={{ marginBottom: 20 }}>Notifications</h2>

            {notifications.map((item) => (
                <div
                    key={item.id}
                    style={{
                        backgroundColor: '#fff',
                        borderRadius: 6,
                        padding: '15px 20px',
                        marginBottom: 10,
                        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                        borderLeft: '4px solid #c10037',
                    }}
                >
                    <div style={{ marginBottom: 8, fontSize: 15 }}>{item.message}</div>
                    <div style={{ display: 'flex', alignItems: 'center', fontSize: 14, color: '#555' }}>
                        <AccessTimeIcon style={{ fontSize: 16, marginRight: 6 }} />
                        <span>{item.date} {item.time}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
