import React from 'react';
import logo from './logo.svg';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './App.css';
import Waves from 'node-waves/dist/waves';

import {BrowserRouter as Router} from "react-router-dom";
import { appStoreContainer} from "./store/appStore";
import NavBar from "./components/NavBar";
import RightSideBar from "./components/RightSideBar";
import Content from "./components/Content";
import SideNav from "./components/SideNav";
import RightThemeSideBar from "./components/RightThemeSideBar";

const SideBarCompactStyle = "enlarged";

function App() {




  function initWaves() {

      Waves.attach('.waves-effect','.button-menu-mobile');
      Waves.init();
  }

  function initLayout() {
    //setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    if (window.innerWidth >= 768 && window.innerWidth <= 1028) {

      document.body.classList.add(SideBarCompactStyle);
    } else {
      {/*if (document.body.data('keep-enlarged') !== true) {*/
      }

      document.body.classList.add(SideBarCompactStyle);

    }
    {/* */}


  }

   const initApp = () =>{
       initLayout()
       initWaves()

   }

  React.useEffect(() => {

    window.addEventListener("resize", initApp);

    return () => {
      window.removeEventListener("resize", initApp);
    };
  }, []);


  return (


      <Router>

        <appStoreContainer.Provider>
      <div id="wrapper" >


       <NavBar/>

        <SideNav/>


      <Content/>

      </div>

          <RightSideBar/>
            <RightThemeSideBar/>


          <div className="rightbar-overlay"></div>
            <div className="right-bar-theme-overlay"></div>


        </appStoreContainer.Provider>
      </Router>

);
}

export default App;
