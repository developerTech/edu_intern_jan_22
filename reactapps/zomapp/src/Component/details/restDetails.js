import React,{Component} from 'react';
import axios from 'axios';
import './details.css';
import {Link} from 'react-router-dom';
import MenuDisplay from './menuDisplay'
import Header from '../../header'

const url = "https://zomatoajulypi.herokuapp.com/details"
const menuUrl = "https://zomatoajulypi.herokuapp.com/menu"

class RestDetails extends Component {

    constructor(){
        super()

        this.state={
            details:'',
            menuList:'',
            userItem:'',
            mealId:sessionStorage.getItem('mealId')?sessionStorage.getItem('mealId'):1
        }
    }

    addToCart = (data) => {
        this.setState({userItem:data})
    }

    proceed = () => {
        sessionStorage.setItem('menu',this.state.userItem);
        this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
    }

    render(){
        //let details = this.state.details
        let {details} = this.state
        console.log(this.state.userItem)
        return(
            <>
                <Header/>
                <div id="mainContent">
                    <div className="imgDiv">
                    <img src={this.state.details.restaurant_thumb} alt="snacks"/>
                    </div>
                    <div className="contentDiv">
                        <h1>{details.restaurant_name}</h1>
                        <span>231 Customers Rating is {details.rating_text}</span>
                        <h3><del>Old Price: 1000</del></h3>
                        <h3>New Price: Rs.{details.cost}</h3>
                        <h3>Best Taste of Fresh Chai with Samosa At your Door or DineIn</h3>
                        <div className="feature_container">
                            <div className="feature">
                                <img src="https://i.ibb.co/wJvrhYg/veg.png" alt="veg" className="imgIcon"/>
                                <p>Pure Veg</p>
                            </div>
                            <div className="feature">
                                <img src="https://i.ibb.co/mD3jpgc/sentizied.png" alt="veg" className="imgIcon"/>
                                <p>Fully Senatized</p>
                            </div>
                            <div className="feature">
                                <img src="https://i.ibb.co/kHrm3Mh/delivery.png" alt="delivery" className="imgIcon"/>
                                <p>Free Delivery</p>
                            </div>
                        </div>
                        <h2>Available</h2>
                       
                        <div>
                            <Link to= {`/listing/${this.state.mealId}`} className="btn btn-back">Back</Link>
                            {/* <button className="btn btn-checkout">Add To Cart</button> */}
                            <button className="btn btn-proceed" onClick={this.proceed}>Checkout</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <MenuDisplay menudata={this.state.menuList}
                    finalOrder={(data) => {this.addToCart(data)}}/>
                </div>

            </>
        )
    }

    //calling api with async await 
    async componentDidMount(){
        let restId = this.props.location.search.split('=')[1];
        let response = await axios.get(`${url}/${restId}`)
        console.log(">>>response.data[0].restaurant_id",response.data[0].restaurant_id)
        let menuResponse = await axios.get(`${menuUrl}/${response.data[0].restaurant_id}`)
        this.setState({details:response.data[0],menuList:menuResponse.data})
    }
}

export default RestDetails;