import React from "react";
import Footer from "./Footer";
import {Switch, Route, Link } from "react-router-dom";


import routes from "../router";
import Dashboard1 from "../pages/Dashboard1";

const ContentComponent = () => {

    console.log("routes",routes);
    return (

        <div className="content-page">
            <div className="content">



                    <Switch>


                        <Route exact path="/" component={Dashboard1}/>
                        {routes.map((router,idx) => (


                        <Route key={idx} path={router.path} component={router.component} />


                            ))}
                    </Switch>

                </div>





            <Footer/>


        </div>
    );
};
export default ContentComponent;