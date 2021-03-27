import React, {useEffect, useRef, useState,useCallback} from "react";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
const RightSideBarComponent = () => {


    const [clickedOutside, setClickedOutside] = useState(false);
    const rightSideBarRef = useRef();
    let defaultProps = {
        title: 'Right Sidebar'
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
        if (rightSideBarRef.current.contains(e.target)) {
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
        document.body.classList.remove("right-bar-enabled");
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    });
    return (

        <div className="right-bar" ref={rightSideBarRef}>
            <div className="rightbar-title">
                <a href="javascript:void(0);" className="right-bar-toggle float-right" onClick={handleClose}>
                    <i className="mdi mdi-close"></i>
                </a>
                <h4 className="font-17 m-0 text-white">Theme Customizer</h4>
            </div>
            <PerfectScrollbar>
            <div className="slimscroll-menu">

                <div className="p-4">
                    <div className="alert alert-warning" role="alert">
                        <strong>Customize </strong> the overall color scheme, layout, etc.
                    </div>
                    <div className="mb-2">
                        <img src="/assets/images/layouts/light.png" className="img-fluid img-thumbnail" alt=""/>
                    </div>
                    <div className="custom-control custom-switch mb-3">
                        <input type="checkbox" className="custom-control-input theme-choice" id="light-mode-switch"
                               defaultChecked={"checked"}/>
                        <label className="custom-control-label" htmlFor="light-mode-switch">Light Mode</label>
                    </div>

                    <div className="mb-2">
                        <img src="/assets/images/layouts/dark.png" className="img-fluid img-thumbnail" alt=""/>
                    </div>
                    <div className="custom-control custom-switch mb-3">
                        <input type="checkbox" className="custom-control-input theme-choice" id="dark-mode-switch"
                               data-appstyle="/assets/css/bootstrap-dark.min.css"
                               data-appstyle="/assets/css/app-dark.min.css"/>
                        <label className="custom-control-label" htmlFor="dark-mode-switch">Dark Mode</label>
                    </div>

                    <div className="mb-2">
                        <img src="/assets/images/layouts/rtl.png" className="img-fluid img-thumbnail" alt=""/>
                    </div>
                    <div className="custom-control custom-switch mb-5">
                        <input type="checkbox" className="custom-control-input theme-choice" id="rtl-mode-switch"
                               data-appstyle="/assets/css/app-rtl.min.css" onChange={handChangeAppTheme}/>
                        <label className="custom-control-label" htmlFor="rtl-mode-switch">RTL Mode</label>
                    </div>

                </div>
            </div>
            </PerfectScrollbar>

        </div>
    );
};
export default RightSideBarComponent;