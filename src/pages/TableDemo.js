import React from "react";
import TableComponent from "../components/table/Table";

const TableDemo = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box">
                        <h4 className="page-title">Bootstrap Table Page</h4>
                        <div className="page-title-right">
                            <ol className="breadcrumb p-0 m-0">
                                <li className="breadcrumb-item"><a href="#">Velonic</a></li>
                                <li className="breadcrumb-item"><a href="#">Forms</a></li>
                                <li className="breadcrumb-item active">Bootstrap Table Page</li>
                            </ol>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>


            <TableComponent title="用户信息" fields={['#','id', 'name', 'email', 'phone', 'operation']}/>
        </div>
    );
};
export default TableDemo;