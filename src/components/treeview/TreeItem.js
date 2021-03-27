import {useEffect, useState} from "react";
import React from "react";
import * as ProType from "prop-types";

import "./treeview.css";
import menuData from "../../api/MenuService"
import {Switch, Route, Link } from "react-router-dom";


const TreeItemComponent = (props) => {

    const [nodes, setNodes] = useState([]);
    const [selected, setSelected] = useState();
    const [opened, setOpened] = useState();
    const [disabled, setDisabled] = useState();
    const [currentSelection, setCurrentSelection] = useState();

    const {
        id="",
        parentId="#",
        text="",
        icon="",
        treeitem=[],
    }=props;

    const handTreeNodeClick=(e,i)=>
    {
         var toggler = document.getElementsByClassName("caret");
       // var i;

        let clickDom=e.target;
        clickDom.parentElement.querySelector(".nested").classList.toggle("active");
        clickDom.classList.toggle("caret-down");


    }


    const Menu = function Menu({ items, handleClick, selection }) {

        return (

            <React.Fragment>

                {items.map((item,index) => (


                    <li key={item.id}>


                            {item.has_sub==='yes'?(<span className="caret">  {item.name}</span>):item.name}


                            {item.children && item.children.length > 0 ?(
                                <span className="badge badge-info badge-pill float-right">
                                {item.children?item.children.length:null}
                            </span>):("")}





                        {item.children && item.children.length > 0 ?  (
                            <ul  className="nested">

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






      //  getData();
        setNodes({...nodes,nodes:menuData.data})
       // console.log("=dd===================",props.treeitem);

       // document.addEventListener("click", handTreeNodeClick);
       // return () => document.removeEventListener("click", handTreeNodeClick);

    }, [])

    /*
    const getData = async () => {

        const response = await axios.get(URL);
        setTreeItem(response.data)
    }
    */
    return (

       <React.Fragment>
        {JSON.stringify(props.treeitem)}
          <ul id="treeview">

              <Menu
                  items={menuData.data}
                  selection={currentSelection}
              />
          </ul>
            <ul id="treeview1">
               <li><span className="caret">Beverages</span>
                   <ul className="nested">
                       <li>Water</li>
                       <li>Coffee</li>
                       <li><span className="caret">Tea</span>
                           <ul className="nested">
                               <li>Black Tea</li>
                               <li>White Tea</li>
                               <li><span className="caret">Green Tea</span>
                                   <ul className="nested">
                                       <li>Sencha</li>
                                       <li>Gyokuro</li>
                                       <li>Matcha</li>
                                       <li>Pi Lo Chun</li>
                                   </ul>
                               </li>
                           </ul>
                       </li>
                   </ul>
               </li>
           </ul>


       </React.Fragment>
    );
};
TreeItemComponent.prototype={
    text:ProType.string.isRequired,
    id:ProType.string.isRequired,
    parentId:ProType.string.isRequired,



}
export default TreeItemComponent