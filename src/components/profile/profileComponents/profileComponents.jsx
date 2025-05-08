import React, { useState } from "react";
import './profileComponents.css'
import { AppImages } from "../../../constants/AppImages";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import TollOutlinedIcon from '@mui/icons-material/TollOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Dashboard } from "../dashboard/dashboard";
import useScreenWidth from "../../../hooks/screenWidth";
import TopDrawer from "../TopDrawer/topDrawer";
import { NotificationsList } from "../Notification/notification";
import { BankDetailsForm } from "../BankDetailsForm/bankDetails";


export const ProfileComponent = () => {
      const [OpenTopDrawer, setOpenTopDrawer] = useState(false)
    
    const screenWidth = useScreenWidth()
    const [click, setClick] = useState(0)
    return (
        <div className="profile">
            <div className="profile_component">
                {screenWidth < 991 ? (
                    <div  onClick={() => setOpenTopDrawer(true)}>
                    <span className="logout">Show menu</span>
                </div>
                ) :
                <div className="profile_left" >
                    <div className="user_div">
                        <div><img src={AppImages.owner1} className="user_image" /></div>
                        <div className="user_data">
                            <span className="user_name_1">John Due</span>
                            <span className="email">john.customer@example.com</span>
                        </div>
                    </div>
                    <div className="profile_list" onClick={() => setClick(1)}>
                        <div className="profile_icon_div" style={{ backgroundColor: click === 1 ? "#c10037" : null }}>
                            <HomeOutlinedIcon className="profile_icon" style={{ color: click === 1 ? "#fff" : "#000" }} />
                        </div>
                        <span style={{ color: click === 1 ? "#c10037" : "#000" }}>Dashboard</span>
                    </div>
                    <div className="profile_list" onClick={() => setClick(2)}>
                        <div className="profile_icon_div" style={{ backgroundColor: click === 2 ? "#c10037" : null }}>
                            <NotificationsNoneOutlinedIcon className="profile_icon" style={{ color: click === 2 ? "#fff" : "#000" }}/>
                        </div>
                        <span style={{ color: click === 2 ? "#c10037" : "#000" }}>Notifications</span>
                    </div>
                    <div className="profile_list" onClick={() => setClick(3)}>
                        <div className="profile_icon_div" style={{ backgroundColor: click === 3 ? "#c10037" : null }}>
                            <AccountBalanceOutlinedIcon className="profile_icon" style={{ color: click === 3 ? "#fff" : "#000" }} />
                        </div>
                        <span style={{ color: click === 3 ? "#c10037" : "#000" }}>Bank Details</span>
                    </div>
                    <div className="profile_list" onClick={() => setClick(4)}>
                        <div className="profile_icon_div" style={{ backgroundColor: click === 4 ? "#c10037" : null }}>
                            <AccountBalanceWalletOutlinedIcon className="profile_icon" style={{ color: click === 4 ? "#fff" : "#000" }} />
                        </div>
                        <span style={{ color: click === 4 ? "#c10037" : "#000" }}>My Wallet</span>
                    </div>
                    <div className="profile_list" onClick={() => setClick(5)}>
                        <div className="profile_icon_div" style={{ backgroundColor: click === 5 ? "#c10037" : null }}>
                            <TollOutlinedIcon className="profile_icon" style={{ color: click === 5 ? "#fff" : "#000" }}/>
                        </div>
                        <span style={{ color: click === 5 ? "#c10037" : "#000" }}>Earning Points</span>
                    </div>
                    <div className="profile_list" onClick={() => setClick(6)}>
                        <div className="profile_icon_div" style={{ backgroundColor: click === 6 ? "#c10037" : null }}>
                            <AssignmentOutlinedIcon className="profile_icon" style={{ color: click === 6 ? "#fff" : "#000" }}/>
                        </div>
                        <span style={{ color: click === 6 ? "#c10037" : "#000" }}>My Orders</span>
                    </div>
                    <div className="profile_list" onClick={() => setClick(7)}>
                        <div className="profile_icon_div" style={{ backgroundColor: click === 7 ? "#c10037" : null }}>
                            <PaidOutlinedIcon className="profile_icon" style={{ color: click === 7 ? "#fff" : "#000" }}/>
                        </div>
                        <span style={{ color: click === 7 ? "#c10037" : "#000" }}>Refund History</span>
                    </div>
                    <div className="profile_list" onClick={() => setClick(8)}>
                        <div className="profile_icon_div" style={{ backgroundColor: click === 8 ? "#c10037" : null }}>
                            <LocationOnOutlinedIcon className="profile_icon" style={{ color: click === 8 ? "#fff" : "#000" }}/>
                        </div>
                        <span style={{ color: click === 8 ? "#c10037" : "#000" }}>Save Address</span>
                    </div>
                    <div >
                        <span className="logout">Logout</span>
                    </div>

                </div>
                 }
                <div className="profile_right">
                   {click === 1 && <Dashboard/>}
                   {click === 2 && <NotificationsList/>}
                   {click === 3 && <BankDetailsForm/>}
                </div>

            </div>
            <TopDrawer open={OpenTopDrawer} onClose={() => setOpenTopDrawer(false)}/>
        </div>
    )
}