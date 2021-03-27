import React, {useRef, useState} from "react";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {appStoreContainer} from "../store/appStore";
import MenuItem from "./MenuItem";

const SideBarCompactStyle = "enlarged";
const SideNavComponent = () => {
    const appStore = appStoreContainer.useContainer();
    const [sideNavisCondensed, setSideNavisCondensed] = useState(false);

    const menuNodeRef = useRef();



    React.useEffect(() => {

        //window.addEventListener("resize", initMenu);
        /*
        document.addEventListener('mousedown', handleOtherClick, false);
        return () => {
            document.removeEventListener('mousedown', handleOtherClick, false);

        };
        */
    }, []);

    return (

        <div className="left-side-menu" ref={menuNodeRef}>

            <div className="slimscroll-menu">


               <MenuItem/>


                <div className="clearfix"></div>

            </div>


        </div>
    );
};
export default SideNavComponent;