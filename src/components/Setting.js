import React, {useEffect, useRef, useState} from "react";
import {appStoreContainer} from "../store/appStore";

const SettingComponent = () => {


    /**
     * Toggle right side bar
     */
    const toggleRightSidebar = () => {
        document.body.classList.toggle("right-bar-enabled");
    }


    const appStore = appStoreContainer.useContainer();
    return (

              <li className="dropdown notification-list" >
                <a href="javascript:void(0);" className="nav-link right-bar-toggle waves-effect" onClick={toggleRightSidebar}>
                    <i className="mdi mdi-settings-outline noti-icon"></i>
                </a>

            </li>

    );
};
export default SettingComponent;