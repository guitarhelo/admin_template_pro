import React from "react";
import PortletComponent from "../components/portlets/Portlet";

const PortLetsDemo = () => {
    return (
        <div className="container-fluid">

            <div class="row">
                <div class="col-12">
                    <div class="page-title-box">
                        <h4 class="page-title">Portlets</h4>
                        <div class="page-title-right">
                            <ol class="breadcrumb p-0 m-0">
                                <li class="breadcrumb-item"><a href="#">Velonic</a></li>
                                <li class="breadcrumb-item"><a href="#">Components</a></li>
                                <li class="breadcrumb-item active">Portlets</li>
                            </ol>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>

           <PortletComponent title="panjingping"
                             data="fuckyou"
                             headerTheme="bg-primary text-white"
            />


            <div class="row">
                <div class="col-xl-4 col-sm-6 ">

                    <div class="card">
                        <div class="card-header bg-transparent py-3">
                            <div class="card-widgets">
                                <a href="javascript:;" data-toggle="reload"><i class="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase1" role="button" aria-expanded="false" aria-controls="cardCollpase2"><i class="mdi mdi-minus"></i></a>
                                <a href="#" data-toggle="remove"><i class="mdi mdi-close"></i></a>
                            </div>
                            <h5 class="card-title mb-0">Default Heading</h5>
                        </div>
                        <div id="cardCollpase1" class="collapse show">
                            <div class="card-body">
                                Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up.
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-xl-4 col-sm-6 ">

                    <div class="card">
                        <div class="card-header bg-primary py-3 text-white">
                            <div class="card-widgets">
                                <a href="javascript:;" data-toggle="reload"><i class="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase2" role="button" aria-expanded="false" aria-controls="cardCollpase2"><i class="mdi mdi-minus"></i></a>
                                <a href="#" data-toggle="remove"><i class="mdi mdi-close"></i></a>
                            </div>
                            <h5 class="card-title mb-0 text-white">Primary Heading</h5>
                        </div>
                        <div id="cardCollpase2" class="collapse show">
                            <div class="card-body">
                                Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up.
                            </div>
                        </div>
                    </div>

                </div>


                <div class="col-xl-4 col-sm-6 ">

                    <div class="card">
                        <div class="card-header bg-info py-3 text-white">
                            <div class="card-widgets">
                                <a href="javascript:;" data-toggle="reload"><i class="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase3" role="button" aria-expanded="false" aria-controls="cardCollpase2"><i class="mdi mdi-minus"></i></a>
                                <a href="#" data-toggle="remove"><i class="mdi mdi-close"></i></a>
                            </div>
                            <h5 class="card-title mb-0 text-white">Info Heading</h5>
                        </div>
                        <div id="cardCollpase3" class="collapse show">
                            <div class="card-body">
                                Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up.
                            </div>
                        </div>
                    </div>


                </div>

                <div class="col-xl-4 col-sm-6 ">

                    <div class="card">
                        <div class="card-header bg-success py-3 text-white">
                            <div class="card-widgets">
                                <a href="javascript:;" data-toggle="reload"><i class="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase4" role="button" aria-expanded="false" aria-controls="cardCollpase2"><i class="mdi mdi-minus"></i></a>
                                <a href="#" data-toggle="remove"><i class="mdi mdi-close"></i></a>
                            </div>
                            <h5 class="card-title mb-0 text-white">Success Heading</h5>
                        </div>
                        <div id="cardCollpase4" class="collapse show">
                            <div class="card-body">
                                Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up.
                            </div>
                        </div>
                    </div>

                </div>


                <div class="col-xl-4 col-sm-6 ">

                    <div class="card">
                        <div class="card-header bg-purple py-3 text-white">
                            <div class="card-widgets">
                                <a href="javascript:;" data-toggle="reload"><i class="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase5" role="button" aria-expanded="false" aria-controls="cardCollpase2"><i class="mdi mdi-minus"></i></a>
                                <a href="#" data-toggle="remove"><i class="mdi mdi-close"></i></a>
                            </div>
                            <h5 class="card-title mb-0 text-white">Warning Heading</h5>
                        </div>
                        <div id="cardCollpase5" class="collapse show">
                            <div class="card-body">
                                Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up.
                            </div>
                        </div>
                    </div>

                </div>


                <div class="col-xl-4 col-sm-6 ">

                    <div class="card">
                        <div class="card-header bg-danger  py-3 text-white">
                            <div class="card-widgets">
                                <a href="javascript:;" data-toggle="reload"><i class="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase6" role="button" aria-expanded="false" aria-controls="cardCollpase2"><i class="mdi mdi-minus"></i></a>
                                <a href="#" data-toggle="remove"><i class="mdi mdi-close"></i></a>
                            </div>
                            <h5 class="card-title mb-0 text-white">Danger Heading</h5>
                        </div>
                        <div id="cardCollpase6" class="collapse show">
                            <div class="card-body">
                                Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up.
                            </div>
                        </div>
                    </div>

                </div>


                <div class="col-xl-4 col-sm-6 ">

                    <div class="card">
                        <div class="card-header bg-dark py-3 text-white">
                            <div class="card-widgets">
                                <a href="javascript:;" data-toggle="reload"><i class="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase7" role="button" aria-expanded="false" aria-controls="cardCollpase2"><i class="mdi mdi-minus"></i></a>
                                <a href="#" data-toggle="remove"><i class="mdi mdi-close"></i></a>
                            </div>
                            <h5 class="card-title mb-0 text-white">Dark Heading</h5>
                        </div>
                        <div id="cardCollpase7" class="collapse show">
                            <div class="card-body">
                                Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up.
                            </div>
                        </div>
                    </div>

                </div>


                <div class="col-xl-4 col-sm-6 ">

                    <div class="card">
                        <div class="card-header bg-pink  py-3 text-white">
                            <div class="card-widgets">
                                <a href="javascript:;" data-toggle="reload"><i class="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase8" role="button" aria-expanded="false" aria-controls="cardCollpase2"><i class="mdi mdi-minus"></i></a>
                                <a href="#" data-toggle="remove"><i class="mdi mdi-close"></i></a>
                            </div>
                            <h5 class="card-title mb-0 text-white">Pink Heading</h5>
                        </div>
                        <div id="cardCollpase8" class="collapse show">
                            <div class="card-body">
                                Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up.
                            </div>
                        </div>
                    </div>

                </div>


                <div class="col-xl-4 col-sm-6 ">

                    <div class="card">
                        <div class="card-header bg-purple  py-3 text-white">
                            <div class="card-widgets">
                                <a href="javascript:;" data-toggle="reload"><i class="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase9" role="button" aria-expanded="false" aria-controls="cardCollpase2"><i class="mdi mdi-minus"></i></a>
                                <a href="#" data-toggle="remove"><i class="mdi mdi-close"></i></a>
                            </div>
                            <h5 class="card-title mb-0 text-white">Purple Heading</h5>
                        </div>
                        <div id="cardCollpase9" class="collapse show">
                            <div class="card-body">
                                Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up.
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            <div className="row">
                <div className="col-lg-4">

                    <div className="card">
                        <div className="card-body">
                            <div className="card-widgets">
                                <a href="#" data-toggle="reload"><i className="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase1" role="button" aria-expanded="false"
                                   aria-controls="cardCollpase1"><i className="mdi mdi-minus"></i></a>
                                <a href="#" data-toggle="remove"><i className="mdi mdi-close"></i></a>
                            </div>
                            <h5 className="card-title mb-0">Card title</h5>

                            <div id="cardCollpase1" className="collapse pt-3 show">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">

                    <div className="card bg-primary text-white">
                        <div className="card-body">
                            <div className="card-widgets">
                                <a href="#" data-toggle="reload"><i className="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase2" role="button" aria-expanded="false"
                                   aria-controls="cardCollpase2"><i className="mdi mdi-minus"></i></a>
                                <a href="#" data-toggle="remove"><i className="mdi mdi-close"></i></a>
                            </div>
                            <h5 className="card-title mb-0 text-white">Card title</h5>

                            <div id="cardCollpase2" className="collapse pt-3 show">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">

                    <div className="card bg-success text-white">
                        <div className="card-body">
                            <div className="card-widgets">
                                <a href="#" data-toggle="reload"><i className="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase3" role="button" aria-expanded="false"
                                   aria-controls="cardCollpase3"><i className="mdi mdi-minus"></i></a>
                                <a href="#" data-toggle="remove"><i className="mdi mdi-close"></i></a>
                            </div>
                            <h5 className="card-title mb-0 text-white">Card title</h5>

                            <div id="cardCollpase3" className="collapse pt-3 show">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-lg-4">

                    <div className="card">
                        <div className="card-header bg-danger py-3 text-white">
                            <div className="card-widgets">
                                <a href="#" data-toggle="reload"><i className="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase4" role="button" aria-expanded="false"
                                   aria-controls="cardCollpase2"><i className="mdi mdi-minus"></i></a>
                                <a href="#" data-toggle="remove"><i className="mdi mdi-close"></i></a>
                            </div>
                            <h5 className="card-title mb-0 text-white">Card title</h5>
                        </div>
                        <div id="cardCollpase4" className="collapse show">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">

                    <div className="card">
                        <div className="card-header bg-purple py-3 text-white">
                            <div className="card-widgets">
                                <a href="#" data-toggle="reload"><i className="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase5" role="button" aria-expanded="false"
                                   aria-controls="cardCollpase2"><i className="mdi mdi-minus"></i></a>
                                <a href="#" data-toggle="remove"><i className="mdi mdi-close"></i></a>
                            </div>
                            <h5 className="card-title mb-0 text-white">Card title</h5>
                        </div>
                        <div id="cardCollpase5" className="collapse show">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">

                    <div className="card">
                        <div className="card-header bg-warning py-3 text-white">
                            <div className="card-widgets">
                                <a href="#" data-toggle="reload"><i className="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase6" role="button" aria-expanded="false"
                                   aria-controls="cardCollpase2"><i className="mdi mdi-minus"></i></a>
                                <a href="#" data-toggle="remove"><i className="mdi mdi-close"></i></a>
                            </div>
                            <h5 className="card-title mb-0 text-white">Card title</h5>
                        </div>
                        <div id="cardCollpase6" className="collapse show">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-lg-4">

                    <div className="card">
                        <div className="card-header bg-info py-3 text-white">
                            <div className="card-widgets">
                                <a href="#" data-toggle="reload"><i className="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase7" role="button" aria-expanded="false"
                                   aria-controls="cardCollpase2"><i className="mdi mdi-minus"></i></a>
                                <a href="#" data-toggle="remove"><i className="mdi mdi-close"></i></a>
                            </div>
                            <h5 className="card-title mb-0 text-white">Card title</h5>
                        </div>
                        <div id="cardCollpase7" className="collapse show">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-lg-4">

                    <div className="card">
                        <div className="card-header bg-dark py-3 text-white">
                            <div className="card-widgets">
                                <a href="#" data-toggle="reload"><i className="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase8" role="button" aria-expanded="false"
                                   aria-controls="cardCollpase2"><i className="mdi mdi-minus"></i></a>
                                <a href="#" data-toggle="remove"><i className="mdi mdi-close"></i></a>
                            </div>
                            <h5 className="card-title mb-0 text-white">Card title</h5>
                        </div>
                        <div id="cardCollpase8" className="collapse show">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-lg-4">

                    <div className="card">
                        <div className="card-header bg-pink py-3 text-white">
                            <div className="card-widgets">
                                <a href="#" data-toggle="reload"><i className="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase9" role="button" aria-expanded="false"
                                   aria-controls="cardCollpase2"><i className="mdi mdi-minus"></i></a>
                                <a href="#" data-toggle="remove"><i className="mdi mdi-close"></i></a>
                            </div>
                            <h5 className="card-title mb-0 text-white">Card title</h5>
                        </div>
                        <div id="cardCollpase9" className="collapse show">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>






    );
};
export default PortLetsDemo;