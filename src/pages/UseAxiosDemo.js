import React ,{useState} from "react";
import useAxios from 'axios-hooks'
const UseAxiosDemo = () => {

    const [page, setPage] = useState(1)
    const [{ data, loading, error }] = useAxios({
        url: 'https://reqres.in/api/users',
        params: { page },
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box">
                        <h4 className="page-title">Use Axios Hooks</h4>
                        <div className="page-title-right">
                            <ol className="breadcrumb p-0 m-0">
                                <li className="breadcrumb-item"><a href="#">Velonic</a></li>
                                <li className="breadcrumb-item"><a href="#">Forms</a></li>
                                <li className="breadcrumb-item active">Use Axios Hooks</li>
                            </ol>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
            <div className="row" data-component="PageContent">
                <div className="row">
                    <div className="col-lg-auto">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="header-title">Table head options</h4>
                                 <div className="table-responsive table-hover">
                                    <table className="table mb-0">
                                        <thead class="thead-light">
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Email</th>
                                            <th>Username</th>
                                            <th>avatar</th>
                                            <th>Action</th>

                                        </tr>
                                        </thead>
                                        <tbody>


                                        {data.data.map((user, key) => {
                                            return (
                                            <tr>
                                            <th scope="row">{user.id}</th>
                                            <td>{user.first_name}</td>
                                            <td>{user.last_name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.last_name}</td>
                                            <td><img className="rounded-circle" height="30" width="30"
                                            src="/assets/images/users/avatar-1.jpg"/>
                                            </td>

                                            <td><button className="btn btn-success waves-effect width-md waves-light">Edit</button>  <button className="btn btn-success waves-effect width-md waves-light">Delete</button></td>

                                            </tr>

                                            );
                                        })}


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12" >

                                    <nav aria-label="Page navigation">
                                        <ul className="pagination justify-content-end">
                                            <li className="page-item"><a className="page-link" href="#" onClick={() => setPage(p => Math.max(1, p - 1))}>Previous</a></li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#" onClick={() => setPage(p => p + 1)}>Next</a></li>
                                            <span className="justify-content-">Total Page:{data.total_pages}</span>
                                        </ul>

                                    </nav>

                                </div>
                            </div>
                        </div>

                    </div>
            </div>


        </div>


        </div>
    );
};
export default UseAxiosDemo;