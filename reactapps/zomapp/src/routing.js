import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header'
import Footer from './Footer';
import Home from './Home'

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
                <div className="container">
                    <Route exact path="/" component={Home}/>
                </div>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing