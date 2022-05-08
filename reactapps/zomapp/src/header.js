import React,{Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

class Header extends Component {

    render(){
        return (
            <header>
                <div id="icon">
                    <h1>Zomato</h1>
                </div>
                <Link to="/" className="btn btn-info btnclass">Home</Link>
                <div id="social">
                    <a href="https//www.facebook.com" target="_blank">
                        <img src="https://i.ibb.co/dtzG625/facebook.png" alt="Facebook" className="slogo"/>
                    </a>
                    <a href="https//www.instagram.com" target="_blank">
                        <img src="https://i.ibb.co/19H5LvT/insta.png" alt="Instagram" className="slogo"/>
                    </a>
                    <a href="https//www.youtube.com" target="_blank">
                        <img src="https://i.ibb.co/w07K2Vn/youtube1.png" alt="youtube" className="slogo"/>
                    </a>
                </div>
            </header>
        )
    }
    
}

export default Header;