import React,{ useEffect, useRef,useState} from "react";

const LanguageDropDownComponent = () => {

    const [languageDropDownIsOpen, setLanguageDropDownIsOpen] = useState(false);
    const [clickedOutside, setClickedOutside] = useState(false);
    const myRef = useRef();
    const languageDropDownTrgger= () => setLanguageDropDownIsOpen(languageDropDownIsOpen =>!languageDropDownIsOpen);

    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target)) {
            setClickedOutside(true);
            setLanguageDropDownIsOpen(false);
        }
    };
    const handleClickInside = () => setClickedOutside(false);
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    });

    return (

        <li ref={myRef} onClick={handleClickInside} className={languageDropDownIsOpen?"dropdown d-none d-lg-block show":"dropdown d-none d-lg-block"}>
            <a className="nav-link dropdown-toggle mr-0 waves-effect" data-toggle="dropdown" href="#"
               role="button" aria-haspopup={languageDropDownIsOpen?"true":"false"} aria-expanded="false" onClick={languageDropDownTrgger} >
                <img src="/assets/images/flags/us.jpg" alt="user-image" className="mr-2" height="12"/> <span
                className="align-middle">English <i className="mdi mdi-chevron-down"></i> </span>
            </a>

            <div  className={languageDropDownIsOpen ?"dropdown-menu dropdown-menu-right show":"dropdown-menu dropdown-menu-right"}>

                <a href="javascript:void(0);" className="dropdown-item notify-item">
                    <img src="/assets/images/flags/germany.jpg" alt="user-image" className="mr-2"
                         height="12"/> <span className="align-middle">German</span>
                </a>


                <a href="javascript:void(0);" className="dropdown-item notify-item">
                    <img src="/assets/images/flags/italy.jpg" alt="user-image" className="mr-2" height="12"/>
                    <span className="align-middle">Italian</span>
                </a>


                <a href="javascript:void(0);" className="dropdown-item notify-item">
                    <img src="/assets/images/flags/spain.jpg" alt="user-image" className="mr-2" height="12"/>
                    <span className="align-middle">Spanish</span>
                </a>


                <a href="javascript:void(0);" className="dropdown-item notify-item">
                    <img src="/assets/images/flags/russia.jpg" alt="user-image" className="mr-2"
                         height="12"/> <span className="align-middle">Russian</span>
                </a>
            </div>
        </li>
    );
};
export default LanguageDropDownComponent;