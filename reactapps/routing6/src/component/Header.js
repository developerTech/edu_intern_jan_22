import React from 'react';
import {Link,Outlet} from 'react-router-dom';
import Footer from './Footer'

const Header = (props) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Developer Funnel</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/post'>Post</Link></li>
                        <li><Link to='/profile'>Profile</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
            <Footer/>
        </React.Fragment>
    )
}

export default Header;