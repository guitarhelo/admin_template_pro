import React, { useState, useCallback } from 'react';
import useModal from '../hooks/useModal';
const UseModalDemo = () => {
    const [Modal, open, close, isOpen] = useModal('wrapper', {
        preventScroll: true
    });
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box">
                        <h4 className="page-title">UseModal Hook Page</h4>
                        <div className="page-title-right">
                            <ol className="breadcrumb p-0 m-0">
                                <li className="breadcrumb-item"><a href="#">Velonic</a></li>
                                <li className="breadcrumb-item"><a href="#">React Hooks</a></li>
                                <li className="breadcrumb-item active">Use Modal</li>
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
                            <p>Modal is Open? {isOpen ? 'Yes' : 'No'}</p>

                            <button className="btn btn-primary waves-effect waves-light" onClick={open}>OPEN</button>




                            <Modal>
                                <div>



                                        <h1>Title</h1>
                                        <p>This is a customizable modal.</p>
                                        <button onClick={close}>CLOSE</button>

                                </div>
                            </Modal>





                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default UseModalDemo;