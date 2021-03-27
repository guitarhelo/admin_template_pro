import React from "react";
import BarChartWidgets from "../components/widgets/BarChart";
import YearSalesReportWidgets from "../components/widgets/YearSalesReport";

const Dashboard3 = () => {
    return (

        <div className="container-fluid">

            <div className="row">
                <div className="col-12">
                    <div className="page-title-box">
                        <h4 className="page-title">Dashboard 3</h4>
                        <div className="page-title-right">
                            <ol className="breadcrumb p-0 m-0">
                                <li className="breadcrumb-item"><a href="#">Velonic</a></li>
                                <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                                <li className="breadcrumb-item active">Dashboard 3</li>
                            </ol>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-xl-3 col-sm-6">
                    <div className="card">
                        <div className="card-body widget-style-2">
                            <div className="media">
                                <div className="media-body align-self-center">
                                    <h2 className="my-0"><span data-plugin="counterup">50</span></h2>
                                    <p className="mb-0">Daily Visits</p>
                                </div>
                                <i className="ion-md-eye text-pink bg-light"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-sm-6">
                    <div className="card">
                        <div className="card-body widget-style-2">
                            <div className="media">
                                <div className="media-body align-self-center">
                                    <h2 className="my-0"><span data-plugin="counterup">12056</span></h2>
                                    <p className="mb-0">Sales</p>
                                </div>
                                <i className="ion-md-paper-plane text-purple bg-light"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-sm-6">
                    <div className="card">
                        <div className="card-body widget-style-2">
                            <div className="media">
                                <div className="media-body align-self-center">
                                    <h2 className="my-0"><span data-plugin="counterup">1268</span></h2>
                                    <p className="mb-0">New Orders</p>
                                </div>
                                <i className="ion-ios-pricetag text-info bg-light"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-sm-6">
                    <div className="card">
                        <div className="card-body widget-style-2">
                            <div className="media">
                                <div className="media-body align-self-center">
                                    <h2 className="my-0"><span data-plugin="counterup">145</span></h2>
                                    <p className="mb-0">New Users</p>
                                </div>
                                <i className="mdi mdi-comment-multiple text-primary bg-light"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">

                    <div className="card">
                        <div className="card-header py-3 bg-transparent">
                            <div className="card-widgets">
                                <a href="javascript:;" data-toggle="reload"><i className="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase1" role="button" aria-expanded="false"
                                   aria-controls="cardCollpase1"><i className="mdi mdi-minus"></i></a>
                                <a href="#" data-toggle="remove"><i className="mdi mdi-close"></i></a>
                            </div>
                            <h5 className="header-title mb-2"> Yearly Sales Report</h5>
                        </div>
                        <div id="cardCollpase1" className="collapse show">
                            <div className="card-body">
                                <div id="morris-area-example" className="morris-charts" dir="ltr"
                                     style={{"height": "320px;"}}>


                                    <YearSalesReportWidgets/>




                                </div>
                                <div className="row text-center mt-4">
                                    <div className="col-sm-3 col-6">
                                        <h5>$ 126</h5>
                                        <small className="text-muted"> Today's Sales</small>
                                    </div>
                                    <div className="col-sm-3 col-6">
                                        <h5>$ 967</h5>
                                        <small className="text-muted">This Week's Sales</small>
                                    </div>
                                    <div className="col-sm-3 col-6">
                                        <h5>$ 4500</h5>
                                        <small className="text-muted">This Month's Sales</small>
                                    </div>
                                    <div className="col-sm-3 col-6">
                                        <h5>$ 87,000</h5>
                                        <small className="text-muted">This Year's Sales</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-lg-6">
                    <div className="portlet">
                        <div className="card">
                            <div className="card-header py-3 bg-transparent">
                                <div className="card-widgets">
                                    <a href="javascript:;" data-toggle="reload"><i className="mdi mdi-refresh"></i></a>
                                    <a data-toggle="collapse" href="#cardCollpase2" role="button" aria-expanded="false"
                                       aria-controls="cardCollpase2"><i className="mdi mdi-minus"></i></a>
                                    <a href="#" data-toggle="remove"><i className="mdi mdi-close"></i></a>
                                </div>
                                <h5 className="header-title mb-2"> Weekly Sales Report</h5>
                            </div>
                            <div id="cardCollpase2" className="collapse show">
                                <div className="card-body">
                                    <div id="morris-bar-example" className="morris-charts" dir="ltr"
                                         style={{"height": "320px;"}}>


                                        <BarChartWidgets/>




                                    </div>





                                    <div className="row text-center mt-4">
                                        <div className="col-sm-3 col-6">
                                            <h5>$ 126</h5>
                                            <small className="text-muted"> Today's Sales</small>
                                        </div>
                                        <div className="col-sm-3 col-6">
                                            <h5>$ 967</h5>
                                            <small className="text-muted">This Week's Sales</small>
                                        </div>
                                        <div className="col-sm-3 col-6">
                                            <h5>$ 4500</h5>
                                            <small className="text-muted">This Month's Sales</small>
                                        </div>
                                        <div className="col-sm-3 col-6">
                                            <h5>$ 87,000</h5>
                                            <small className="text-muted">This Year's Sales</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="row">

                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header py-3 bg-transparent">
                            <div className="card-widgets">
                                <a href="javascript:;" data-toggle="reload"><i className="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase3" role="button" aria-expanded="false"
                                   aria-controls="cardCollpase3"><i className="mdi mdi-minus"></i></a>
                                <a href="#" data-toggle="remove"><i className="mdi mdi-close"></i></a>
                            </div>
                            <h5 className="header-title mb-0"> Todo</h5>
                        </div>
                        <div id="cardCollpase3" className="collapse show">
                            <div className="card-body">
                                <div className="todoapp">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <h6 id="todo-message"><span id="todo-remaining"></span> of <span
                                                id="todo-total"></span> remaining</h6>
                                        </div>
                                        <div className="col-sm-6">
                                            <a href="" className="float-right btn btn-primary btn-sm"
                                               id="btn-archive">Archive</a>
                                        </div>
                                    </div>

                                    <ul className="list-group slimscroll todo-list" style={{"min-height": "324px;"}}
                                        id="todo-list"></ul>

                                    <form name="todo-form" id="todo-form" className="mt-3">
                                        <div className="row">
                                            <div className="col-9 todo-inputbar">
                                                <input type="text" id="todo-input-text" name="todo-input-text"
                                                       className="form-control" placeholder="Add new todo"/>
                                            </div>
                                            <div className="col-3 todo-send">
                                                <button className="btn-info btn-block btn" type="button"
                                                        id="todo-btn-submit">Add
                                                </button>
                                            </div>
                                        </div>
                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-header py-3 bg-transparent">
                            <div className="card-widgets">
                                <a href="javascript:;" data-toggle="reload"><i className="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase4" role="button" aria-expanded="false"
                                   aria-controls="cardCollpase4"><i className="mdi mdi-minus"></i></a>
                                <a href="#" data-toggle="remove"><i className="mdi mdi-close"></i></a>
                            </div>
                            <h5 className="header-title mb-0"> Projects</h5>
                        </div>
                        <div id="cardCollpase4" className="collapse show">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-nowrap mb-0">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Project Name</th>
                                            <th>Start Date</th>
                                            <th>Due Date</th>
                                            <th>Status</th>
                                            <th>Assign</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Velonic Admin v1</td>
                                            <td>01/01/2015</td>
                                            <td>26/04/2015</td>
                                            <td><span className="badge badge-info">Released</span></td>
                                            <td>Coderthemes</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Velonic Frontend v1</td>
                                            <td>01/01/2015</td>
                                            <td>26/04/2015</td>
                                            <td><span className="badge badge-success">Released</span></td>
                                            <td>Coderthemes</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Velonic Admin v1.1</td>
                                            <td>01/05/2015</td>
                                            <td>10/05/2015</td>
                                            <td><span className="badge badge-pink">Pending</span></td>
                                            <td>Coderthemes</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Velonic Frontend v1.1</td>
                                            <td>01/01/2015</td>
                                            <td>31/05/2015</td>
                                            <td><span className="badge badge-purple">Work in Progress</span></td>
                                            <td>Coderthemes</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Velonic Admin v1.3</td>
                                            <td>01/01/2015</td>
                                            <td>31/05/2015</td>
                                            <td><span className="badge badge-warning">Coming soon</span></td>
                                            <td>Coderthemes</td>
                                        </tr>

                                        <tr>
                                            <td>6</td>
                                            <td>Velonic Admin v1.3</td>
                                            <td>01/01/2015</td>
                                            <td>31/05/2015</td>
                                            <td><span className="badge badge-primary">Coming soon</span></td>
                                            <td>Coderthemes</td>
                                        </tr>

                                        <tr>
                                            <td>7</td>
                                            <td>Velonic Admin v1.3</td>
                                            <td>01/01/2015</td>
                                            <td>31/05/2015</td>
                                            <td><span className="badge badge-info">Cool</span></td>
                                            <td>Coderthemes</td>
                                        </tr>

                                        <tr>
                                            <td>8</td>
                                            <td>Velonic Admin v1.3</td>
                                            <td>01/01/2015</td>
                                            <td>31/05/2015</td>
                                            <td><span className="badge badge-warning">Coming soon</span></td>
                                            <td>Coderthemes</td>
                                        </tr>

                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
};
export default Dashboard3;