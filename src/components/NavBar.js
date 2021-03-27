import React from "react";
import LanguageDropDown from "./LanguageDropDown";
import MessageDropDown from "./MessageDropDown";
import NotificationDropDown from "./NotificationDropDown";
import ProfileDropDown from "./ProfileDropDown";
import Setting from "./Setting";
import LogoBox from "./LogoBox";
import SideNavTrigger from "./SideNavTrigger";
import FullScreenComponent from "./FullScreenSetting";
import BarStyleSetting from "./table/BarStyleSetting";
const NavBarComponent = () => {
    return (

        <div className="navbar-custom">
            <ul className="list-unstyled topnav-menu float-right mb-0">


                <LanguageDropDown/>

                <MessageDropDown/>

                <NotificationDropDown/>

                <ProfileDropDown/>
                <FullScreenComponent/>

                <Setting/>
                <BarStyleSetting/>




            </ul>


          <LogoBox/>



            <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
                <SideNavTrigger/>


                <li className="dropdown d-none d-lg-block">
                    <a className="nav-link dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#"
                       role="button" aria-haspopup="false" aria-expanded="false">
                        Create New
                        <i className="mdi mdi-chevron-down"></i>
                    </a>
                    <div className="dropdown-menu" x-placement="bottom-start"
                         style={{"position": "absolute", "will-change": "transform;" ,"top": "0px;", "left": "0px;", "transform": "translate3d(0px, 70px, 0px);"}}>

                        <a href="javascript:void(0);" className="dropdown-item">
                            <i className="fe-briefcase mr-1"></i>
                            <span>New Projects</span>
                        </a>


                        <a href="javascript:void(0);" className="dropdown-item">
                            <i className="fe-user mr-1"></i>
                            <span>Create Users</span>
                        </a>


                        <a href="javascript:void(0);" className="dropdown-item">
                            <i className="fe-bar-chart-line- mr-1"></i>
                            <span>Revenue Report</span>
                        </a>


                        <a href="javascript:void(0);" className="dropdown-item">
                            <i className="fe-settings mr-1"></i>
                            <span>Settings</span>
                        </a>

                        <div className="dropdown-divider"></div>


                        <a href="javascript:void(0);" className="dropdown-item">
                            <i className="fe-headphones mr-1"></i>
                            <span>Help &amp; Support</span>
                        </a>

                    </div>
                </li>

                <li className="dropdown dropdown-mega d-none d-lg-block">
                    <a className="nav-link dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#"
                       role="button" aria-haspopup="false" aria-expanded="false">
                        Mega Menu
                        <i className="mdi mdi-chevron-down"></i>
                    </a>
                    <div className="dropdown-menu dropdown-megamenu" x-placement="bottom-start"
                         style={{"position": "absolute", "will-change": "transform;", "top": "0px;", "left": "0px;", "transform": "translate3d(35px, 70px, 0px);"}}>

                        <div className="row">
                            <div className="col-sm-8">

                                <div className="row">
                                    <div className="col-md-4">
                                        <h5 className="text-dark mt-0">UI Components</h5>
                                        <ul className="list-unstyled megamenu-list">
                                            <li>
                                                <a href="javascript:void(0);">Widgets</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">Nestable List</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">Range Sliders</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">Masonry Items</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">Sweet Alerts</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">Treeview Page</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">Tour Page</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-md-4">
                                        <h5 className="text-dark mt-0">Applications</h5>
                                        <ul className="list-unstyled megamenu-list">
                                            <li>
                                                <a href="javascript:void(0);">eCommerce Pages</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">CRM Pages</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">Email</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">Calendar</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">Team Contacts</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">Task Board</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">Email Templates</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-md-4">
                                        <h5 className="text-dark mt-0">Extra Pages</h5>
                                        <ul className="list-unstyled megamenu-list">
                                            <li>
                                                <a href="javascript:void(0);">Left Sidebar with User</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">Menu Collapsed</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">Small Left Sidebar</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">New Header Style</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">Search Result</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">Gallery Pages</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">Maintenance &amp; Coming Soon</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="text-center mt-3">
                                    <h3 className="text-dark">Special Discount Sale!</h3>
                                    <h4>Save up to 70% off.</h4>
                                    <button className="btn btn-primary mt-3">Download Now <i
                                        className="ml-1 mdi mdi-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </li>



                <li className="d-none d-lg-block">
                    <form className="app-search">
                        <div className="app-search-box">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search..."/>
                                <div className="input-group-append">
                                    <button className="btn" type="submit">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </form>
                </li>
            </ul>
        </div>
    );
};
export default NavBarComponent;