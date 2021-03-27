import React from "react";
import { useQuery } from "react-query";
const ReactQueryDemo = () => {

    const { isLoading, error, data } = useQuery("repoData", () =>
        fetch(
            "https://hn.algolia.com/api/v1/search?query=php"
        ).then((res) => res.json())


    );

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    console.log("get data=======",data);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box">
                        <h4 className="page-title">React Query Page</h4>
                        <div className="page-title-right">
                            <ol className="breadcrumb p-0 m-0">
                                <li className="breadcrumb-item"><a href="#">Velonic</a></li>
                                <li className="breadcrumb-item"><a href="#">Forms</a></li>
                                <li className="breadcrumb-item active">React Query Page</li>
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



                            <div>
                                fuck

                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ReactQueryDemo;