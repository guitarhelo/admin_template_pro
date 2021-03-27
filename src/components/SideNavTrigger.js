import React from "react";
import {appStoreContainer} from "../store/appStore";

const SideNavTriggerComponent = () => {

    const appStore = appStoreContainer.useContainer();


    /**
     * Toggle right side bar
     */
    const toggleLeftSidebar = () => {

            appStore.sideNavTrgger();


            if (!appStore.sideNavIsOpen) {
                document.body.classList.remove("sidebar-enable");
                document.body.classList.remove("enlarged");
            } else {
                document.body.classList.add("sidebar-enable");
                const isSmallScreen = window.innerWidth < 768;
                if (!isSmallScreen) {
                    document.body.classList.add("enlarged");
                }
            }



    }
    return (


        <li>

            <button className="button-menu-mobile waves-effect" onClick={toggleLeftSidebar}>
                <i className="mdi mdi-menu"></i>
            </button>
        </li>

    );
};
export default SideNavTriggerComponent;