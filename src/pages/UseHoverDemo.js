import React from "react";
import useHover from "../hooks/useHover";
import useTimerDemo from "../pages/UseTimerDemo"
const UseHoverDemo = () => {
    const [hoverRef, isHovered] = useHover();
    return (
        <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                <div className="page-title-box">
                    <h4 className="page-title">About Page</h4>
                    <div className="page-title-right">


                        <useTimerDemo/>
                        <ol className="breadcrumb p-0 m-0">
                            <li className="breadcrumb-item"><a href="#">Velonic</a></li>
                            <li className="breadcrumb-item"><a href="#">React Hooks</a></li>
                            <li className="breadcrumb-item active">useHover Demo</li>
                        </ol>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
        <div className="row" data-component="PageContent">
            <div className="col-12">
                <div className="card">
                    <div className="card-body" ref={hoverRef}> {isHovered ? (
                        <div className="lang-hint">文字</div>) : null}
                        This is useHover hooks demo.


                    </div>


                </div>
            </div>
        </div>
        </div>
    );
};
export default UseHoverDemo;