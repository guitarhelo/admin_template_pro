import React, {useEffect, useRef, useState} from "react";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
const MessageDropDownComponent = () => {


    const [messageDropDownIsOpen, setMessageDropDownIsOpen] = useState(false);
    const [clickedOutside, setClickedOutside] = useState(false);
    const myRef = useRef();
    const messageDropDownTrgger= () => setMessageDropDownIsOpen(messageDropDownIsOpen =>!messageDropDownIsOpen);

    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target)) {
            setClickedOutside(true);
            setMessageDropDownIsOpen(false);
        }
    };
    const handleClickInside = () => setClickedOutside(false);
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    });

    return (

        <li ref={myRef} onClick={handleClickInside} className={messageDropDownIsOpen?"dropdown notification-list":"dropdown notification-list"}>
            <a className="nav-link dropdown-toggle  waves-effect" data-toggle="dropdown" href="#"
               role="button" aria-haspopup="false" aria-expanded={messageDropDownIsOpen?"true":"false"} onClick={messageDropDownTrgger}>
                <i className="mdi mdi-email-outline noti-icon"></i>
                <span className="badge badge-purple rounded-circle noti-icon-badge">3</span>
            </a>
            <div className={messageDropDownIsOpen?"dropdown-menu dropdown-menu-right dropdown-lg show":"dropdown-menu dropdown-menu-right dropdown-lg"}>


                <div className="dropdown-item noti-title">
                    <h5 className="font-16 m-0">
                                    <span className="float-right">
                                        <a href="" className="text-dark">
                                            <small>Clear All</small>
                                        </a>
                                    </span>Chat
                    </h5>
                </div>

                <PerfectScrollbar>
                <div className="slimscroll noti-scroll">

                    <div className="inbox-widget">
                        <a href="#">
                            <div className="inbox-item">
                                <div className="inbox-item-img"><img src="/assets/images/users/avatar-1.jpg"
                                                                     className="rounded-circle" alt=""/>
                                </div>
                                <p className="inbox-item-author">Cristina Pride</p>
                                <p className="inbox-item-text text-truncate">Hi, How are you? What about
                                    our next meeting</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="inbox-item">
                                <div className="inbox-item-img"><img src="/assets/images/users/avatar-2.jpg"
                                                                     className="rounded-circle" alt=""/>
                                </div>
                                <p className="inbox-item-author">Sam Garret</p>
                                <p className="inbox-item-text text-truncate">Yeah everything is fine</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="inbox-item">
                                <div className="inbox-item-img"><img src="/assets/images/users/avatar-3.jpg"
                                                                     className="rounded-circle" alt=""/>
                                </div>
                                <p className="inbox-item-author">Karen Robinson</p>
                                <p className="inbox-item-text text-truncate">Wow that's great</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="inbox-item">
                                <div className="inbox-item-img"><img src="/assets/images/users/avatar-4.jpg"
                                                                     className="rounded-circle" alt=""/>
                                </div>
                                <p className="inbox-item-author">Sherry Marshall</p>
                                <p className="inbox-item-text text-truncate">Hi, How are you? What about
                                    our next meeting</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="inbox-item">
                                <div className="inbox-item-img"><img src="/assets/images/users/avatar-5.jpg"
                                                                     className="rounded-circle" alt=""/>
                                </div>
                                <p className="inbox-item-author">Shawn Millard</p>
                                <p className="inbox-item-text text-truncate">Yeah everything is fine</p>

                            </div>
                        </a>
                    </div>

                </div>
                </PerfectScrollbar>
                <a href="javascript:void(0);"
                   className="dropdown-item text-center text-primary notify-item notify-all">
                    View all
                    <i className="fi-arrow-right"></i>
                </a>

            </div>
        </li>
    );
};
export default MessageDropDownComponent;