import React, {useEffect, useRef, useState} from "react";
const BarStyleSettingComponent = () => {




    /**
     * Toggle right side bar
     */
    const toggleRightSidebar = () => {
        document.body.classList.toggle("right-bar-theme-enabled");
    }



    return (

              <li className="dropdown notification-list" >
                <a href="javascript:void(0);" className="nav-link right-bar-toggle waves-effect" onClick={toggleRightSidebar}>
                    <i className="mdi mdi-youtube-creator-studio noti-icon"></i>
                </a>

            </li>

    );
};
export default BarStyleSettingComponent;