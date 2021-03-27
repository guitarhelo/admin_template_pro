import React, { useState,useEffect } from 'react';
import axios from 'axios';
const HooksAxios = () => {

    const [lists, setLists] = useState([]);
    const [query, setQuery] = useState('redux');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        axios('https://hn.algolia.com/api/v1/search?query='+query).then(res=>{
            setLists(res.data.hits);
        })
    },[])

    function searchLists(){
        setIsLoading(true)
        axios('https://hn.algolia.com/api/v1/search?query='+query).then(res=>{
            setLists(res.data.hits);
            setIsLoading(false)
        })
    }

    return (isLoading?('loading......'):
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box">
                        <h4 className="page-title">Hooks Axios Page</h4>

                        <div className="page-title-right">
                            <ol className="breadcrumb p-0 m-0">
                                <li className="breadcrumb-item"><a href="#">Velonic</a></li>
                                <li className="breadcrumb-item"><a href="#">Forms</a></li>
                                <li className="breadcrumb-item active">Hooks Axios Page</li>
                            </ol>
                        </div>
                        <div className="clearfix"></div>
                    </div>


                </div>
            </div>

            <div className="row">
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-body">
                            <div className="input-group">
                                <input type="text" id="example-input1-group2" name="example-input1-group2"
                                       value={query} onChange={e => setQuery(e.target.value)} className="form-control" placeholder="Search"/>
                                            <span className="input-group-append">
                                                <button type="button" className="btn btn-effect-ripple btn-primary" onClick={searchLists}>
                                                    <i className="fa fa-search"></i></button>
                                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" data-component="PageContent">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">


                            <ul>
                                {lists.map(item => (
                                    <li key={item.objectID}>
                                        <a href={item.url}>{item.title}</a>
                                    </li>
                                ))}
                            </ul>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HooksAxios;