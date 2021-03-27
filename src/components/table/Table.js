import React,{useState,useEffect} from "react";
import axios from 'axios'
import "./table.css";
import * as ProType from "prop-types";
const URL = 'https://jsonplaceholder.typicode.com/users'
const tableId="resizeMe"
let select_test="";
const TableComponent = (props) => {

    const [employees, setEmployees] = useState([])
    const [rowSelectItem, setRowSelectItem]= useState([])


    const {
        title="",
        data=[],
        fields=[],
        isRowCanResize=true,
        isSelectRow=true,


    }=props;


    const handleTableRowSelect = (e)=>{

        // employees.find()

        // alert(e.target.checked?"check":"not check");
        let findObject = employees.find(obj => obj.id == e.target.id);
        console.log("find result",findObject)

        if(e.target.checked)
            select_test=JSON.stringify(findObject);
        else
            select_test="";
        setRowSelectItem( prevState  => ({ ...prevState,   rowSelectItem : findObject }));

        console.log("select item",rowSelectItem);
    }


    const show_hide_column = (col_no, do_show)=> {
        var rows = document.getElementById(tableId).rows;

        for (var row = 0; row < rows.length; row++) {
            var cols = rows[row].cells;
            if (col_no >= 0 && col_no < cols.length) {
                cols[col_no].style.display = do_show ? '' : 'none';
            }
        }
    }


    const handleTableClumnShowHide= (e)=>{


        let id=e.target.id;
        if(e.target.checked)
            show_hide_column(id,false);
        else
            show_hide_column(id,true);

    }

    const createResizableColumn = function(col, resizer) {
        let x = 0;
        let w = 0;

        const mouseDownHandler = function(e) {
            x = e.clientX;

            const styles = window.getComputedStyle(col);
            w = parseInt(styles.width, 10);

            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);

            resizer.classList.add('resizing');
        };

        const mouseMoveHandler = function(e) {
            const dx = e.clientX - x;
            col.style.width = `${w + dx}px`;
        };

        const mouseUpHandler = function() {
            resizer.classList.remove('resizing');
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        };

        resizer.addEventListener('mousedown', mouseDownHandler);
    };

    const createResizableTable = function(table) {
        const cols = table.querySelectorAll('th');
        [].forEach.call(cols, function(col) {
            // Add a resizer element to the column
            const resizer = document.createElement('div');
            resizer.classList.add('resizer');

            // Set the height
            resizer.style.height = `${table.offsetHeight}px`;

            col.appendChild(resizer);

            createResizableColumn(col, resizer);
        });
    };





    useEffect(() => {
        createResizableTable(document.getElementById('resizeMe'));

        getData()
    }, [])


    const getData = async () => {

        const response = await axios.get(URL)
        setEmployees(response.data)
    }

    const removeData = (id) => {

        axios.delete(`${URL}/${id}`).then(res => {
            const del = employees.filter(employee => id !== employee.id)
            setEmployees(del)
        })
    }

    const renderHeader = () => {
        // let headerElement = ['id', 'name', 'email', 'phone', 'operation']
        let headerElement = props.fields;

        return headerElement.map((key, index) => {


            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        //      return employees && employees.map(({ id, name, email, phone }) => {
        return employees && employees.map((item,index) => {

            return (

                <tr key={item.id}>
                    <td><input type = "checkbox"
                               id = {item.id}
                               name="checkItem"
                               onClick={handleTableRowSelect}/></td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>

                    {props.fields.length>8?(
                    <td>
                    <div className="btn-group dropdown">
                        <a href="javascript: void(0);" className="dropdown-toggle arrow-none btn btn-light btn-sm"
                           data-toggle="dropdown" aria-expanded="false"><i className="mdi mdi-dots-horizontal"></i></a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#"><i
                                className="mdi mdi-pencil mr-2 text-muted font-18 vertical-middle"></i>Edit Ticket</a>
                            <a className="dropdown-item" href="#"><i
                                className="mdi mdi-check-all mr-2 text-muted font-18 vertical-middle"></i>Close</a>
                            <a className="dropdown-item" href="#"><i
                                className="mdi mdi-delete mr-2 text-muted font-18 vertical-middle"></i>Remove</a>
                            <a className="dropdown-item" href="#"><i
                                className="mdi mdi-star mr-2 font-18 text-muted vertical-middle"></i>Mark as Unread</a>
                        </div>
                    </div>
                    </td>):(<td className='opration'>
                        <button className='button' onClick={() => removeData(item.id)}>Delete</button>
                    </td>)}
                </tr>
            )
        })
    }


    return (
        <React.Fragment>


            {select_test}
            
        <div className="row data-table">
            <div className="col-12">
                <div className="card-box">
                    <h1 id='title'> {props.title}</h1>
                    <div className="row">
                        <div className="col-12">
                            <div className="card-box">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <form className="form-inline">
                                            <div className="form-group">
                                                <label htmlFor="inputPassword2" className="sr-only">Search</label>
                                                <input type="search" className="form-control" id="inputPassword2"
                                                       placeholder="Search..."/>&nbsp;
                                                <button type="button" className="btn btn-success waves-effect waves-light mr-1"><i
                                                    className="mdi mdi-settings"></i></button>&nbsp;

                                                <button type="button" className="btn btn-success waves-effect waves-light mr-1"><i
                                                    className="mdi mdi-account-search"></i></button>
                                            </div>
                                            <div className="form-group mx-sm-3">
                                                <label htmlFor="status-select" className="mr-2">Sort By</label>
                                                <select className="custom-select" id="status-select">
                                                    <option selected="">All</option>
                                                    <option value="1">Name</option>
                                                    <option value="2">Post</option>
                                                    <option value="3">Followers</option>
                                                    <option value="4">Followings</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="text-lg-right mt-3 mt-lg-0">
                                            <button type="button" className="btn btn-success waves-effect waves-light mr-1"><i
                                            className="mdi mdi-settings"></i></button>
                                            <button type="button" className="btn btn-success waves-effect waves-light mr-1"><i
                                                className="mdi mdi-view-compact-outline"></i></button>
                                            <button type="button" className="btn btn-success waves-effect waves-light mr-1"><i
                                                className="mdi mdi-account"></i></button>
                                            <button type="button" className="btn btn-success waves-effect waves-light mr-1"><i
                                                className="mdi mdi-export"></i></button>
                                            <button type="button" className="btn btn-success waves-effect waves-light mr-1"><i
                                                className="mdi mdi-printer"></i></button>

                                            <a href="#custom-modal" className="btn btn-danger waves-effect waves-light"
                                               data-animation="fadein" data-plugin="custommodal" data-overlayColor="#38414a"><i
                                                className="mdi mdi-plus-circle mr-1"></i> Add New</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            <div className="row">



                <ul className="pagination">


                    {props.fields.map((key, index) => (

                        <li><input type = "checkbox"
                                   id = {index}
                                   name={key}
                                   onClick={handleTableClumnShowHide}/>{key}</li>

                    ))}

                </ul>



                    <table  className="table table-hover m-0 table-centered dt-responsive nowrap w-100" cellSpacing="0"
                           id={tableId}>


                        <thead className="bg-light">

                        <tr>{renderHeader()}</tr>
                        </thead>
                        <tbody className="font-14">
                        {renderBody()}


                        </tbody>






                    </table>

            </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-5">
                            <div className="dataTables_info" id="tickets-table_info" role="status"
                                 aria-live="polite">Showing 1 to 10 of 15 entries
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-7">
                            <div className="dataTables_paginate paging_simple_numbers" id="tickets-table_paginate">
                                <ul className="pagination pagination-rounded">
                                    <li className="paginate_button page-item previous disabled"
                                        id="tickets-table_previous">
                                        <a href="#" aria-controls="tickets-table" data-dt-idx="0" tabIndex="0"
                                           className="page-link">
                                            <i className="mdi mdi-chevron-left"></i></a>
                                    </li>
                                    <li className="paginate_button page-item active">
                                        <a href="#" aria-controls="tickets-table" data-dt-idx="1" tabIndex="0"
                                           className="page-link">1
                                        </a>
                                    </li>
                                    <li className="paginate_button page-item ">
                                        <a href="#" aria-controls="tickets-table" data-dt-idx="2" tabIndex="0"
                                           className="page-link">2</a></li>
                                    <li className="paginate_button page-item next" id="tickets-table_next"><a href="#"
                                                                                                              aria-controls="tickets-table"
                                                                                                              data-dt-idx="3"
                                                                                                              tabIndex="0"
                                                                                                              className="page-link">
                                        <i className="mdi mdi-chevron-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        </React.Fragment>




    );
};
TableComponent.prototype={
    title:ProType.string.isRequired,

}

export default TableComponent;