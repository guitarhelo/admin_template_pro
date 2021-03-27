import React,{ useEffect, useRef,useState} from "react";

const ProfileDropDownComponent = () => {

    const [profileDropDownIsOpen, setProfileDropDownIsOpen] = useState(false);
    const [clickedOutside, setClickedOutside] = useState(false);
    const myRef = useRef();
    const profileDropDownTrgger= () => setProfileDropDownIsOpen(profileDropDownIsOpen =>!profileDropDownIsOpen);

    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target)) {
            setClickedOutside(true);
            setProfileDropDownIsOpen(false);
        }
    };
    const handleClickInside = () => setClickedOutside(false);
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    });

    return (

        <li ref={myRef} onClick={handleClickInside} className={profileDropDownIsOpen?"dropdown notification-list show":"dropdown notification-list"}>
            <a className="nav-link dropdown-toggle nav-user mr-0 waves-effect" data-toggle="dropdown"
               href="#" role="button" aria-haspopup="false" aria-expanded={profileDropDownIsOpen?"true":"false"} onClick={profileDropDownTrgger}>
                <img src="/assets/images/users/avatar-1.jpg" alt="user-image" className="rounded-circle"/>
                <span className="pro-user-name ml-1">
                                Thompson   <i className="mdi mdi-chevron-down"></i>
                            </span>
            </a>
            <div className={profileDropDownIsOpen?"dropdown-menu dropdown-menu-right profile-dropdown show":"dropdown-menu dropdown-menu-right profile-dropdown"}>

                <div className="dropdown-header noti-title">
                    <h6 className="text-overflow m-0">Welcome !</h6>
                </div>


                <a href="javascript:void(0);" className="dropdown-item notify-item">
                    <i className="mdi mdi-account-outline"></i>
                    <span>Profile</span>
                </a>


                <a href="javascript:void(0);" className="dropdown-item notify-item">
                    <i className="mdi mdi-settings-outline"></i>
                    <span>Settings</span>
                </a>


                <a href="javascript:void(0);" className="dropdown-item notify-item">
                    <i className="mdi mdi-lock-outline"></i>
                    <span>Lock Screen</span>
                </a>

                <div className="dropdown-divider"></div>


                <a href="javascript:void(0);" className="dropdown-item notify-item">
                    <i className="mdi mdi-logout-variant"></i>
                    <span>Logout</span>
                </a>

            </div>
        </li>
    );
};
export default ProfileDropDownComponent;