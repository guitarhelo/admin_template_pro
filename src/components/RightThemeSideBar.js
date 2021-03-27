import React, {useEffect, useRef, useState,useCallback} from "react";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
const RightThemeSideBarComponent = () => {


    const [clickedOutside, setClickedOutside] = useState(false);
    const rightSideBarThemeRef = useRef();
    let defaultProps = {
        title: 'Right theme Sidebar'
    }

    const handleClose = useCallback(
        (e) => {
            console.log('using button close the right bar');

            e.preventDefault();
            hide();
        },
        [], // Tells React to memoize regardless of arguments.
    );

    const handChangeAppTheme =e  =>{

          console.log(e.target.getAttribute("data-appstyle"));
          let link_href_id;
        if (document.getElementsByTagName('link')) {
            var link;
            var linkHref;
            for (var i = 0; (link = document.getElementsByTagName('link')[i]); i++) {
                linkHref = document.getElementsByTagName('link')[i].getAttribute('href');


                if("/assets/css/custom.css"===linkHref)
               console.log(linkHref+"num"+i);
                link_href_id=i;

            }
            document.links[link_href_id].setAttribute('href', e.target.getAttribute("data-appstyle"));

            console.log(document.getElementsByTagName('link')[link_href_id]);
        }


    }
    const handleClickOutside = e => {
        if (rightSideBarThemeRef.current.contains(e.target)) {
            console.log("you click outside of rightbar");
            return

        }else
        {
            hide();
        }
    };

    const handleClickInside = () => setClickedOutside(false);



    /**
     * Hide rightside bar
     */
    const hide= () =>{
        document.body.classList.remove("right-bar-theme-enabled");
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    });
    return (

        <div className="right-bar-theme" ref={rightSideBarThemeRef}>
            <div className="right-bar-theme-title">
                <a href="javascript:void(0);" className="right-bar-theme-toggle float-right" onClick={handleClose}>
                    <i className="mdi mdi-close"></i>
                </a>
                <h4 className="font-17 m-0 text-white">Theme Customizer for SideNav </h4>
            </div>
            <PerfectScrollbar>
            <div className="slimscroll-menu">

                <div className="p-4">
                    <div className="alert alert-warning" role="alert">
                        <strong>Customize </strong> the overall color scheme, layout, etc.
                    </div>
                    <ul id="themecolors" className="m-t-20">
                        <li><b>With Light sidebar</b></li>
                        <li><a href="javascript:void(0)" data-skin="skin-default"
                               className="default-theme working">1</a></li>
                        <li><a href="javascript:void(0)" data-skin="skin-green" className="green-theme">2</a></li>
                        <li><a href="javascript:void(0)" data-skin="skin-red" className="red-theme">3</a></li>
                        <li><a href="javascript:void(0)" data-skin="skin-blue" className="blue-theme">4</a></li>
                        <li><a href="javascript:void(0)" data-skin="skin-purple" className="purple-theme">5</a></li>
                        <li><a href="javascript:void(0)" data-skin="skin-megna" className="megna-theme">6</a></li>
                        <li className="d-block m-t-30"><b>With Dark sidebar</b></li>
                        <li><a href="javascript:void(0)" data-skin="skin-default-dark"
                               className="default-dark-theme ">7</a></li>
                        <li><a href="javascript:void(0)" data-skin="skin-green-dark"
                               className="green-dark-theme">8</a></li>
                        <li><a href="javascript:void(0)" data-skin="skin-red-dark" className="red-dark-theme">9</a>
                        </li>
                        <li><a href="javascript:void(0)" data-skin="skin-blue-dark"
                               className="blue-dark-theme">10</a></li>
                        <li><a href="javascript:void(0)" data-skin="skin-purple-dark"
                               className="purple-dark-theme">11</a></li>
                        <li><a href="javascript:void(0)" data-skin="skin-megna-dark"
                               className="megna-dark-theme ">12</a></li>
                    </ul>

                </div>
            </div>
            </PerfectScrollbar>

        </div>
    );
};
export default RightThemeSideBarComponent;