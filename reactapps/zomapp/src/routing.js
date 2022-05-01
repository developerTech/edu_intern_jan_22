import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header'
import Footer from './footer';
import Home from './Component/Home/Home'

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
                <Route exact path="/" component={Home}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing