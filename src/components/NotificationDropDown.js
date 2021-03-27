import React, {useEffect, useRef, useState} from "react";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
const NotificationDropDownComponent = () => {


    const [notificationDropDownIsOpen, setNotificationDropDownIsOpen] = useState(false);
    const [clickedOutside, setClickedOutside] = useState(false);
    const myRef = useRef();
    const notificationDropDownTrgger= () => setNotificationDropDownIsOpen(notificationDropDownIsOpen =>!notificationDropDownIsOpen);

    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target)) {
            setClickedOutside(true);
            setNotificationDropDownIsOpen(false);
        }
    };
    const handleClickInside = () => setClickedOutside(false);
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    });

    return (

        <li ref={myRef} onClick={handleClickInside} className={notificationDropDownIsOpen?"dropdown notification-list":"dropdown notification-list show"}>
            <a className="nav-link dropdown-toggle  waves-effect" data-toggle="dropdown" href="#"
               role="button" aria-haspopup="false" aria-expanded={notificationDropDownIsOpen?"true":"false"} onClick={notificationDropDownTrgger}>
                <i className="mdi mdi-bell-outline noti-icon"></i>
                <span className="badge badge-pink rounded-circle noti-icon-badge">4</span>
            </a>
            <div className={notificationDropDownIsOpen?"dropdown-menu dropdown-menu-right dropdown-lg show":"dropdown-menu dropdown-menu-right dropdown-lg"}>


                <div className="dropdown-item noti-title">
                    <h5 className="font-16 m-0">
                                    <span className="float-right">
                                        <a href="" className="text-dark">
                                            <small>Clear All</small>
                                        </a>
                                    </span>Notification
                    </h5>
                </div>
                <PerfectScrollbar>
                <div className="slimscroll noti-scroll">


                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <div className="notify-icon">
                            <i className="mdi mdi-comment-account-outline text-info"></i>
                        </div>
                        <p className="notify-details">Caleb Flakelar commented on Admin
                            <small className="noti-time">1 min ago</small>
                        </p>
                    </a>


                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <div className="notify-icon text-success">
                            <i className="mdi mdi-account-plus text-primary"></i>
                        </div>
                        <p className="notify-details">New user registered.
                            <small className="noti-time">5 hours ago</small>
                        </p>
                    </a>


                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <div className="notify-icon text-danger">
                            <i className="mdi mdi-heart text-danger"></i>
                        </div>
                        <p className="notify-details">Carlos Crouch liked
                            <small className="noti-time">3 days ago</small>
                        </p>
                    </a>


                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <div className="notify-icon text-warning">
                            <i className="mdi mdi-comment-account-outline text-primary"></i>
                        </div>
                        <p className="notify-details">Caleb Flakelar commented on Admi
                            <small className="noti-time">4 days ago</small>
                        </p>
                    </a>


                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <div className="notify-icon text-purple">
                            <i className="mdi mdi-account-plus text-danger"></i>
                        </div>
                        <p className="notify-details">New user registered.
                            <small className="noti-time">7 days ago</small>
                        </p>
                    </a>


                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <div className="notify-icon text-danger">
                            <i className="mdi mdi-heart text-danger"></i>
                        </div>
                        <p className="notify-details">Carlos Crouch liked <b>Admin</b>.
                            <small className="noti-time">Carlos Crouch liked</small>
                        </p>
                    </a>
                </div>

                </PerfectScrollbar>
                <a href="javascript:void(0);" className="dropdown-item text-center notify-item notify-all">
                    See all notifications
                </a>

            </div>
        </li>
    );
};
export default NotificationDropDownComponent;