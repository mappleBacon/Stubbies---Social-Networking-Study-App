import React from 'react';
import {Link} from 'react-router-dom';

import './nav.css';

export default () => {
    return (
        <nav className="navbar navbar">
            <div className="container-fluid navbarCustom">
                <ul className="nav navbar-nav leftNav col-sm-3">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/create-join'>Create or Join</Link>
                    </li>
                </ul>
                <div className="navbar-header headerName col-sm-6">
                    <span className="letter" data-letter="S">S</span>
                    <span className="letter" data-letter="T">T</span>
                    <span className="letter" data-letter="U">U</span>
                    <span className="letter" data-letter="B">B</span>
                    <span className="letter" data-letter="B">B</span>
                    <span className="letter" data-letter="I">I</span>
                    <span className="letter" data-letter="E">E</span>
                    <span className="letter" data-letter="S">S</span>
                </div>
                <ul className="nav navbar-nav navbar-right rightNav col-sm-3">
                    <li>
                        <Link to='/profile'>Profile</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login <span className="glyphicon glyphicon-log-in"></span></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}