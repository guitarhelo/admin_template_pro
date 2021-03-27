import React, {useEffect, useState} from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import BarDemo from "../components/Chart/BarDemo";
import LineDemo from "../components/Chart/LineDemo";
import GoogleBarDemo from "../components/portlets/GoogleBarDemo";
import GoogleLineDemo from "../components/portlets/GoogleLineDemo";

const data={
        labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July"
    ],
        datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            //stack: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },

        {
            label: "My second dataset",
            backgroundColor: "rgba(155,231,91,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            //stack: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [45, 79, 50, 41, 16, 85, 20]
        }
    ]
};





const Dashboard1 = () => {

    const options = {
        responsive: true,
        legend: {
            display: false
        },
        type: "bar"
        //   scales: {
        //     xAxes: [{
        //         stacked: true
        //     }],
        //     yAxes: [{
        //         stacked: true
        //     }]
        // }
    };

    const [data, setData] = useState();


    useEffect(() => {
        console.log("count状态更新");

        setData({data:data});

        return () => {
            console.log("useEffect卸载")
        }
    },[])
    return (

        <div className="container-fluid">

            <div className="row">
            <div className="col-12">
                <div className="page-title-box">
                    <h4 className="page-title">Welcome !</h4>
                    <div className="page-title-right">
                        <ol className="breadcrumb p-0 m-0">
                            <li className="breadcrumb-item"><a href="#">Velonic</a></li>
                            <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                            <li className="breadcrumb-item active">Dashboard 1</li>
                        </ol>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
            </div>
            <div className="row">
                <div className="col-xl-3 col-sm-6">
                    <div className="card bg-pink">
                        <div className="card-body widget-style-2">
                            <div className="text-white media">
                                <div className="media-body align-self-center">
                                    <h2 className="my-0 text-white"><span data-plugin="counterup">50</span></h2>
                                    <p className="mb-0">Daily Visits</p>
                                </div>
                                <i className="ion-md-eye"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-sm-6">
                    <div className="card bg-purple">
                        <div className="card-body widget-style-2">
                            <div className="text-white media">
                                <div className="media-body align-self-center">
                                    <h2 className="my-0 text-white"><span data-plugin="counterup">12056</span></h2>
                                    <p className="mb-0">Sales</p>
                                </div>
                                <i className="ion-md-paper-plane"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-sm-6">
                    <div className="card bg-info">
                        <div className="card-body widget-style-2">
                            <div className="text-white media">
                                <div className="media-body align-self-center">
                                    <h2 className="my-0 text-white"><span data-plugin="counterup">1268</span></h2>
                                    <p className="mb-0">New Orders</p>
                                </div>
                                <i className="ion-ios-pricetag"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-sm-6">
                    <div className="card bg-primary">
                        <div className="card-body widget-style-2">
                            <div className="text-white media">
                                <div className="media-body align-self-center">
                                    <h2 className="my-0 text-white"><span data-plugin="counterup">145</span></h2>
                                    <p className="mb-0">New Users</p>
                                </div>
                                <i className="mdi mdi-comment-multiple"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-7">
                    <div className="card">
                        <div className="card-header py-3 bg-transparent">
                            <div className="card-widgets">
                                <a href="javascript:;" data-toggle="reload"><i className="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase1" role="button" aria-expanded="false"
                                   aria-controls="cardCollpase1"><i className="mdi mdi-minus"></i></a>
                                <a href="#" data-toggle="remove"><i className="mdi mdi-close"></i></a>
                            </div>
                            <h5 className="header-title mb-0">Weekly Sales Report</h5>
                        </div>
                        <div id="cardCollpase1" className="collapse show">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div id="morris-bar-example" className="morris-charts" dir="ltr"
                                             style={{"height": "320px"}}>



                                            <GoogleBarDemo/>

                                        </div>
                                        <div className="row text-center mt-4 mb-4">
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


                <div className="col-xl-5">
                    <div className="card" style={{height:"520px"}}>
                        <div className="card-header py-3 bg-transparent">
                            <div className="card-widgets">
                                <a href="javascript:;" data-toggle="reload"><i className="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase2" role="button" aria-expanded="false"
                                   aria-controls="cardCollpase2"><i className="mdi mdi-minus"></i></a>
                                <a href="#" data-toggle="remove"><i className="mdi mdi-close"></i></a>
                            </div>
                            <h5 className="header-title mb-0"> Yearly Sales Report</h5>
                        </div>
                        <div id="cardCollpase2" className="collapse show">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div id="morris-line-example" className="morris-charts" dir="ltr"
                                             style={{"height": "320px"}}>

                                            <GoogleLineDemo/>


                                        </div>
                                        <div className="row text-center mt-4">
                                            <div className="col-sm-4">
                                                <h5>$ 86,956</h5>
                                                <small className="text-muted"> This Year's Report</small>
                                            </div>
                                            <div className="col-sm-4">
                                                <h5>$ 86,69</h5>
                                                <small className="text-muted">Weekly Sales Report</small>
                                            </div>
                                            <div className="col-sm-4">
                                                <h5>$ 948,16</h5>
                                                <small className="text-muted">Yearly Sales Report</small>
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
                <div className="col-xl-4">
                    <div className="card">
                        <div className="card-header py-3 bg-transparent">
                            <div className="card-widgets">
                                <a href="javascript:;" data-toggle="reload"><i className="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase3" role="button" aria-expanded="false"
                                   aria-controls="cardCollpase3"><i className="mdi mdi-minus"></i></a>
                                <a href="#" data-toggle="remove"><i className="mdi mdi-close"></i></a>
                            </div>
                            <h5 className="header-title mb-0">Chat</h5>
                        </div>
                        <div id="cardCollpase3" className="collapse show">
                            <div className="card-body">
                                <div className="chat-conversation">
                                    <ul className="conversation-list slimscroll" style={{"min-height": "330px"}}>
                                        <li className="clearfix">
                                            <div className="chat-avatar">
                                                <img src="/assets/images/users/avatar-2.jpg" alt="male"/>
                                                    <i>10:00</i>
                                            </div>
                                            <div className="conversation-text">
                                                <div className="ctext-wrap">
                                                    <i>John Deo</i>
                                                    <p>
                                                        Hello!
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="clearfix odd">
                                            <div className="chat-avatar">
                                                <img src="/assets/images/users/avatar-3.jpg" alt="Female"/>
                                                    <i>10:01</i>
                                            </div>
                                            <div className="conversation-text">
                                                <div className="ctext-wrap">
                                                    <i>Smith</i>
                                                    <p>
                                                        Hi, How are you? What about our next meeting?
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="clearfix">
                                            <div className="chat-avatar">
                                                <img src="/assets/images/users/avatar-2.jpg" alt="male"/>
                                                    <i>10:01</i>
                                            </div>
                                            <div className="conversation-text">
                                                <div className="ctext-wrap">
                                                    <i>John Deo</i>
                                                    <p>
                                                        Yeah everything is fine
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="clearfix odd">
                                            <div className="chat-avatar">
                                                <img src="/assets/images/users/avatar-3.jpg" alt="male"/>
                                                    <i>10:02</i>
                                            </div>
                                            <div className="conversation-text">
                                                <div className="ctext-wrap">
                                                    <i>Smith</i>
                                                    <p>
                                                        Wow that's great
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="row mt-3">
                                        <div className="col-9 chat-inputbar">
                                            <input type="text" className="form-control chat-input"
                                                   placeholder="Enter your text"/>
                                        </div>
                                        <div className="col-3 chat-send">
                                            <button type="submit" className="btn btn-info btn-block">Send</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>


                <div className="col-xl-4">
                    <div className="card">
                        <div className="card-header py-3 bg-transparent">
                            <div className="card-widgets">
                                <a href="javascript:;" data-toggle="reload"><i className="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase4" role="button" aria-expanded="false"
                                   aria-controls="cardCollpase4"><i className="mdi mdi-minus"></i></a>
                                <a href="#" data-toggle="remove"><i className="mdi mdi-close"></i></a>
                            </div>
                            <h5 className="header-title mb-0"> Todo</h5>
                        </div>
                        <div id="cardCollpase4" className="collapse show">
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

                                    <ul className="list-group slimscroll todo-list" style={{"max-height": "310px"}}
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


                <div className="col-xl-4">
                    <div className="card">
                        <div className="card-header py-3 bg-transparent">
                            <div className="card-widgets">
                                <a href="javascript:;" data-toggle="reload"><i className="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase5" role="button" aria-expanded="false"
                                   aria-controls="cardCollpase5"><i className="mdi mdi-minus"></i></a>
                                <a href="#" data-toggle="remove"><i className="mdi mdi-close"></i></a>
                            </div>
                            <h5 className="header-title mb-0"> Team Members</h5>
                        </div>
                        <div id="cardCollpase5" className="collapse show">
                            <div className="card-body">
                                <ul className="list-group list-group-lg">
                                    <li className="list-group-item border-0 pt-2">
                                        <a href="" className=" mr-3">
                                            <img src="/assets/images/users/avatar-3.jpg" alt="user-img"
                                                 className="avatar-sm rounded"/>
                                        </a>
                                        <span className="float-right badge badge-primary mt-2">CEO</span>
                                        <a href="">Jonathan Deo</a>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <a href="" className=" mr-3">
                                            <img src="/assets/images/users/avatar-4.jpg" alt="user-img"
                                                 className="avatar-sm rounded"/>
                                        </a>
                                        <span className="float-right badge badge-info mt-2">Webdesigner</span>
                                        <a href="">Doler Perte</a>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <a href="" className=" mr-3">
                                            <img src="/assets/images/users/avatar-5.jpg" alt="user-img"
                                                 className="avatar-sm rounded"/>
                                        </a>
                                        <span className="float-right badge badge-primary mt-2">Webdeveloper</span>
                                        <a href="">Jannie Dvis</a>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <a href="" className=" mr-3">
                                            <img src="/assets/images/users/avatar-6.jpg" alt="user-img"
                                                 className="avatar-sm rounded"/>
                                        </a>
                                        <span className="float-right badge badge-pink mt-2">Programmer</span>
                                        <a href="">Emma Welson</a>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <a href="" className=" mr-3">
                                            <img src="/assets/images/users/avatar-7.jpg" alt="user-img"
                                                 className="avatar-sm rounded"/>
                                        </a>
                                        <span className="float-right badge badge-warning mt-2">Webdeveloper</span>
                                        <a href="">Jannie Dvis</a>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <a href="" className=" mr-3">
                                            <img src="/assets/images/users/avatar-8.jpg" alt="user-img"
                                                 className="avatar-sm rounded"/>
                                        </a>
                                        <span className="float-right badge badge-info mt-2">Webdesigner</span>
                                        <a href="">Petere Husen</a>
                                    </li>
                                    <li className="list-group-item border-0 pb-1">
                                        <a href="" className=" mr-3">
                                            <img src="/assets/images/users/avatar-9.jpg" alt="user-img"
                                                 className="avatar-sm rounded"/>
                                        </a>
                                        <span className="float-right badge badge-warning mt-2">Webdeveloper</span>
                                        <a href="">John Deo</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};
export default Dashboard1;