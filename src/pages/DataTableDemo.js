import React from "react";

const KaTable = () => {



    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box">
                        <h4 className="page-title">Data Table Page</h4>
                        <div className="page-title-right">
                            <ol className="breadcrumb p-0 m-0">
                                <li className="breadcrumb-item"><a href="#">Velonic</a></li>
                                <li className="breadcrumb-item"><a href="#">Forms</a></li>
                                <li className="breadcrumb-item active">Data Table Page</li>
                            </ol>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
            <div className="row" data-component="PageContent">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            This is About within a card block.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default KaTable;