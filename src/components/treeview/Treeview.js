import React,{useState,useEffect} from "react";
import axios from 'axios';
import * as ProType from "prop-types";
import TreeItemComponent from "./TreeItem";
let URL="http://localhost/json/treedata.json";


const  jsondata = [
    { "id": "ajson1", "parentId": "#", "text": "Simple root node" },
    { "id": "ajson2", "parentId": "#", "text": "Root node 2" },
    { "id": "ajson3", "parentId": "ajson2", "text": "Child 1" },
    { "id": "ajson4", "parentId": "ajson2", "text": "Child 2" },
];


const TreeViewComponent = (props) => {

    const [treedata, setTreeData] = useState([])
    const {
        title="",
        data=[],
        lazyloading=true,


    }=props;



    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {

        //const response = await axios.get(URL);

        //console.log("reponese data",response.data);
        setTreeData(jsondata)
    }
    return (

        <div id="basicTree">
            <h2>{props.title}</h2>

            <TreeItemComponent treeitem={treedata}/>

        </div>


    );
};
TreeViewComponent.prototype={
    title:ProType.string.isRequired,

}
export default TreeViewComponent;