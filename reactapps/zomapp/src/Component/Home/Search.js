import React,{Component} from 'react';
import './Search.css';

const url = "https://zomatoajulypi.herokuapp.com/location"
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="
class Search extends Component{

    constructor(props){
        super(props)
        console.log(">>>>inside constructor")
        this.state={
            location:'',
            restaurants:''
        }
    }

    renderCity = (data) => {
        // console.log(">>>>data>>",data)
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        } 
    }

    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option key={item.restaurant_id} value={item.restaurant_id}>{item.restaurant_name} | {item.address}</option>
                )
            })
        } 
    }

    handleRestaurants = (event) => {
        let stateId = event.target.value;
        fetch(`${restUrl}${stateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            // console.log(">>>>",data)
           this.setState({restaurants:data})
        })
    }

    render(){
        console.log(">>>>inside render")
        return(
            <div>
                <div id="search">
                    <div id="logo">
                        <span>E!</span>
                    </div>
                    <div id="heading">
                        Find The Best Restaurants Near You
                    </div>
                    <div className="dropdown">
                        <select onChange={this.handleRestaurants}>
                            <option>-----PLEASE SELECT CITY-----</option>
                            {this.renderCity(this.state.location)}
                        </select>
                        <select className="restlist">
                            <option>-----PLEASE SELECT RESTAURANTS-----</option>
                            {this.renderRest(this.state.restaurants)}
                        </select>
                    </div>
                </div>
            </div>
        )
    }

    // api calling on page load
    componentDidMount(){
        console.log(">>>>inside componentDidMount")
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
}

export default Search