import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const notifications = [
    {
        id: 1,
        message: 'New login detected from a different device. If this wasn’t you, please secure your account.',
        date: '10 May 2025',
        time: '08:15AM',
    },
    {
        id: 2,
        message: 'Your password was successfully changed. If you didn’t initiate this, contact support immediately.',
        date: '09 May 2025',
        time: '11:30AM',
    },
    {
        id: 3,
        message: 'Your subscription has been renewed successfully. Plan: Premium, Valid till: 10 June 2025.',
        date: '08 May 2025',
        time: '04:22PM',
    },
    {
        id: 4,
        message: 'Reminder: Your free trial will expire in 3 days. Upgrade now to continue using premium features.',
        date: '07 May 2025',
        time: '07:05PM',
    }
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
