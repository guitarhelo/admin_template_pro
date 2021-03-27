import React from "react";

const LogoBoxComponent = () => {
    return (

        <div className="logo-box">
            <a href="index.html" className="logo text-center logo-dark">
                        <span className="logo-lg">
                            <img src="/assets/images/logo-dark1.png" alt="" height="18"></img>

                        </span>
                <span className="logo-sm">

                         <img src="/assets/images/logo-sm.png" alt="" height="22"></img>
                        </span>
            </a>

            <a href="index.html" className="logo text-center logo-light">
                        <span className="logo-lg">
                            <img src="/assets/images/logo-light1.png" alt="" height="18"></img>

                        </span>
                <span className="logo-sm">

                         <img src="/assets/images/logo-sm.png" alt="" height="22"></img>
                        </span>
            </a>
        </div>
    );
};
export default LogoBoxComponent;