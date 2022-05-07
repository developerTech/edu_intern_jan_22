import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header'
import Footer from './footer';
import Home from './Component/Home/Home';
import Listing from './Component/listing/listing';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/listing/:id" component={Listing}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing