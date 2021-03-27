import React from "react";
import SparkLinesVisitorWidgets from "../components/widgets/SparkLinesVisitor";
import PieChartWidgets from "../components/widgets/PieChart";
import WebsieStatsWidgets from "../components/widgets/WebsiteStats";
import LiveVisitersWidgets from "../components/widgets/LiveVisiters";

const Dashboard2 = () => {
    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box">
                        <h4 className="page-title">Dashboard 2</h4>
                        <div className="page-title-right">
                            <ol className="breadcrumb p-0 m-0">
                                <li className="breadcrumb-item"><a href="#">Velonic</a></li>
                                <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                                <li className="breadcrumb-item active">Dashboard 2</li>
                            </ol>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-6">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="tile-stats">
                                        <div className="status">
                                            <h4 className="mt-0">15% more</h4>
                                            <p>Monthly visitor statistics</p>
                                        </div>
                                        <div className="chart-inline">
                                            <span className="inlinesparkline">
                                                <SparkLinesVisitorWidgets/>

                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="tile-stats">
                                        <div className="status">
                                            <h4 className="mt-0">15</h4>
                                            <p>Avg. Sales per day</p>
                                        </div>
                                        <span className="dynamicbar-big"><canvas width="205"
                                                                                 height="32"></canvas></span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="tile-stats">
                                        <div className="status">
                                            <h3 className="mt-0">-0.0102 <small className="float-right">
                                                <small>Stock Market</small>
                                            </small></h3>
                                        </div>
                                        <span id="compositeline">
                                            <canvas width="383" height="32"></canvas></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="card" style={{"height":"120px"}}>
                                <div className="card-body">
                                    <div className="tile-stats">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <div className="status">
                                                    <h4 className="mt-2">61.5%</h4>
                                                    <p className="mb-1">US Dollar Share</p>
                                                </div>
                                            </div>
                                            <div className="col-sm-4 mt-3">
                                                <span className="sparkpie-big">

                                                <PieChartWidgets/>

                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6">

                    <div className="card">
                        <div className="card-header py-3 bg-transparent">
                            <div className="card-widgets">
                                <a href="javascript:;" data-toggle="reload"><i className="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase1" role="button" aria-expanded="false"
                                   aria-controls="cardCollpase1"><i className="mdi mdi-minus"></i></a>
                                <a href="#" data-toggle="remove"><i className="mdi mdi-close"></i></a>
                            </div>
                            <h5 className="header-title mb-2"> Live Visiters</h5>
                        </div>
                        <div id="cardCollpase1" className="collapse show">
                            <div className="card-body">

                                <LiveVisitersWidgets/>



                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="row">
                <div className="col-lg-12">

                    <div className="card">
                        <div className="card-header py-3 bg-transparent">
                            <div className="card-widgets">
                                <a href="javascript:;" data-toggle="reload"><i className="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase2" role="button" aria-expanded="false"
                                   aria-controls="cardCollpase2"><i className="mdi mdi-minus"></i></a>
                                <a href="#" data-toggle="remove"><i className="mdi mdi-close"></i></a>
                            </div>
                            <h5 className="header-title mb-2"> Website Stats</h5>
                        </div>
                        <div id="cardCollpase2" className="collapse show">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div id="website-stats" style={{"height": "320px"}}>

                                            <WebsieStatsWidgets/>


                                        </div>
                                        <div className="row text-center mt-4">
                                            <div className="col-sm-4">
                                                <h5>86,956</h5>
                                                <small className="text-muted"> Weekly Report</small>
                                            </div>
                                            <div className="col-sm-4">
                                                <h5>86,69</h5>
                                                <small className="text-muted">Monthly Report</small>
                                            </div>
                                            <div className="col-sm-4">
                                                <h5>948,16</h5>
                                                <small className="text-muted">Yearly Report</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">

                                        <div className="pl-xl-4">
                                            <p className="mb-1">Handles - <span className="text-purple">80%</span></p>
                                            <div className="progress mb-5" style={{"height": "7px"}}>
                                                <div className="progress-bar bg-purple progress-animated wow animated"
                                                     role="progressbar" aria-valuenow="80" aria-valuemin="0"
                                                     aria-valuemax="100" style={{"width": "80%"}}>
                                                </div>
                                            </div>
                                            <p className="mb-1">Threads - <span className="text-warning">65%</span></p>
                                            <div className="progress mb-5" style={{"height": "7px"}}>
                                                <div className="progress-bar bg-warning progress-animated wow animated"
                                                     role="progressbar" aria-valuenow="65" aria-valuemin="0"
                                                     aria-valuemax="100" style={{"width": "65%"}}>
                                                </div>
                                            </div>
                                            <p className="mb-1">Process - <span className="text-success">40%</span></p>
                                            <div className="progress mb-5" style={{"height": "7px"}}>
                                                <div className="progress-bar bg-success progress-animated wow animated"
                                                     role="progressbar" aria-valuenow="40" aria-valuemin="0"
                                                     aria-valuemax="100" style={{"width": "40%"}}>
                                                </div>
                                            </div>
                                            <p className="mb-1">Cached - <span className="text-info">70%</span></p>
                                            <div className="progress mb-5" style={{"height": "7px;"}}>
                                                <div className="progress-bar bg-info progress-animated wow animated"
                                                     role="progressbar" aria-valuenow="70" aria-valuemin="0"
                                                     aria-valuemax="100" style={{"width": "70%"}}>
                                                </div>
                                            </div>
                                            <p className="mb-1">Cached 2 - <span className="text-pink">50%</span></p>
                                            <div className="progress mb-0" style={{"height": "7px;"}}>
                                                <div className="progress-bar bg-pink progress-animated wow animated"
                                                     role="progressbar" aria-valuenow="50" aria-valuemin="0"
                                                     aria-valuemax="100" style={{"width": "50%"}}>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header py-3 bg-transparent">
                            <div className="card-widgets">
                                <a href="javascript:;" data-toggle="reload"><i className="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase3" role="button" aria-expanded="false"
                                   aria-controls="cardCollpase3"><i className="mdi mdi-minus"></i></a>
                                <a href="#" data-toggle="remove"><i className="mdi mdi-close"></i></a>
                            </div>
                            <h5 className="header-title mb-2"> Projects</h5>
                        </div>
                        <div id="cardCollpase3" className="collapse show">
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
export default Dashboard2;