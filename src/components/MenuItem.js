import React, {useEffect, useState} from "react";
import {appStoreContainer} from "../store/appStore";
import {Switch, Route, Link } from "react-router-dom";

import menuData from "../api/MenuService"

const MenuItemComponent = () => {

    const appStore = appStoreContainer.useContainer();
    const [menuItemCollapse, changeMenuItemCollapse] = useState({objects: []});
    const [menuItems, setMenuItems] = useState({data: []});
    const [currentSelection, setCurrentSelection] = useState();
    let totalCollapseMenuItems = 0;
    let totalSubMenuItems = 0;
    let totalMenuItems = 0;
    function getTotalMenuItems(data) {


        data.forEach(function (item) {
            totalSubMenuItems = totalSubMenuItems + 1;
            if (item.children && item.children.length > 0)
                getTotalMenuItems(item.children);
            //console.log(item);

        });

        totalCollapseMenuItems = totalCollapseMenuItems + 1;


    }

    function initMenuItemState(data) {

        /*
        let list = [];
        let input = ["John","Hari","James"]
        let myJson;


        for(let i = 0; i < input.length; i++){
            myJson = {"name" : input[i]};
            list.push(myJson);
        }
    */


      console.log("the init array length",totalMenuItems);

        let menuCollapseStatus;
        for (var i = 0; i < totalMenuItems; i++) {


            menuCollapseStatus = {"id": i, "toggle": true, "isActive": false};

            data.push(menuCollapseStatus);


        }


    }

    function toggleMenuItemActive(index, parent_id, has_sub) {


        let arrayCopy = [...menuItemCollapse.objects];



            if (has_sub === 'yes') {
                arrayCopy[index].toggle ? (arrayCopy[index].toggle = false) : (arrayCopy[index].toggle = true);

               !arrayCopy[index].isActive ? (arrayCopy[index].isActive = true) : (arrayCopy[index].isActive = false);

            } else {
                arrayCopy[index].isActive=true;

            }


        changeMenuItemCollapse({...menuItemCollapse,objects:arrayCopy});

        console.log("update status======",menuItemCollapse.objects);

    }

    function toggleAriaExpandedStyle(index){


            if (menuItemCollapse.objects[index].toggle) {
                return "false";
            } else {

                return "true"
            }

    }



    function toggleMenuItemActiveStyle(index,parent_id,has_sub) {

        if (menuItemCollapse.objects[index].isActive){

                return "mm-active"
            } else{

            return "";
        }

    }

    function toggleLinkActive(index){


           if (menuItemCollapse.objects[index].isActive) {
            return "waves-effect active";
        } else {

            return "waves-effect"
        }



    }
    function toggleSubMenuItemActiveStyle(index,menuLevel) {


            if (menuLevel <= 2) {
                if (menuItemCollapse.objects[index].toggle) {
                    return "nav-second-level mm-collapse";
                } else {

                    return "nav-second-level mm-collapse mm-show"
                }
            } else {

                if (menuItemCollapse.objects[index].toggle) {
                    return "nav-third-level nav mm-collapse";
                } else {

                    return "nav-third-level nav mm-collapse mm-show"
                }


            }

    }


    const Menu = function Menu({ items, handleClick, selection }) {

        return (

            <React.Fragment>

                {items.map((item,index) => (


                    <li key={item.id} className={toggleMenuItemActiveStyle(item.item_index,item.parent_id,item.has_sub)}>
                        <Link className={menuItemCollapse.objects[item.item_index].isActive?"waves-effect active":"waves-effect"}  to={item.link}  onClick={() => {toggleMenuItemActive(item.item_index,item.parent_id,item.has_sub)}} aria-expanded={toggleAriaExpandedStyle(item.item_index)}>

                            {item.level==1?(<i className={item.icon?item.icon:""}></i>):null}
                            <span>  {item.name}</span>


                            {item.children && item.children.length > 0 ?(
                            <span className="badge badge-info badge-pill float-right">
                                {item.children?item.children.length:null}
                            </span>):("")}

                            {item.has_sub==='yes'?(
                                <span className="menu-arrow"/>
                        ):("")}
                         </Link>



                {item.children && item.children.length > 0 ?  (
                    <ul className={toggleSubMenuItemActiveStyle(item.item_index,item.level)} aria-expanded="false">

                    <Menu items={item.children}
                          handleClick={handleClick}
                          selection={selection}
                    />
                    </ul>
                        ) : null}
                    </li>
                ))}
            </React.Fragment>
        );
    };



    useEffect(() => {

        console.log('render!');

        setMenuItems({...menuItems,data:menuData.data})

        console.log("menuItems=====",menuItems);


        getTotalMenuItems(menuData.data);

        console.log("total sub menu items:" + totalSubMenuItems);

        console.log("total collapse menu items:" + totalCollapseMenuItems);

        totalMenuItems=totalSubMenuItems+totalCollapseMenuItems;
        let menuItemStateArray={objects:[]};

        initMenuItemState(menuItemStateArray.objects);

        console.log(menuItemStateArray.objects);

       changeMenuItemCollapse({...menuItemCollapse,objects:menuItemStateArray.objects});


        return ( ()=>{
            console.log('cleanup similar to componentWillUnmount');
        });


    }, []);


    return (


        <div id="sidebar-menu" className={appStore.sideNavIsOpen?"scrollable":""}>


            <ul className="sidemenu" id="side-menu">



                <li className="menu-title">Navigation</li>


                <Menu
                    items={menuItems.data}
                    selection={currentSelection}
                />


            </ul>

        </div>

    );
};
export default MenuItemComponent;