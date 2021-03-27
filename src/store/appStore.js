import { useState } from "react";
import { createContainer } from 'unstated-next'
export const useAppStore = () => {
    // Construct a list that contains two default tasks

    //sidenav is open or close


    const [age, setAge] = useState(19);
    const [sideNavIsOpen, setSideNavIsOpen] = useState(true);
    const [showFullScreen, setShowFullScreen] = useState(false);
    const [rightSideBarIsOpen, setRightSideBarIsOpen] = useState(false);

    const handleClick = () => setAge(age + 1);
    const sideNavTrgger = () => setSideNavIsOpen(sideNavIsOpen =>!sideNavIsOpen);


    const rightSideBarTrgger = () => setRightSideBarIsOpen(rightSideBarIsOpen =>!rightSideBarIsOpen);


    return {
        sideNavIsOpen,
        age,
        rightSideBarIsOpen,
        handleClick,
        sideNavTrgger,
        rightSideBarTrgger,
        showFullScreen,
    };
}
export const appStoreContainer = createContainer(useAppStore)