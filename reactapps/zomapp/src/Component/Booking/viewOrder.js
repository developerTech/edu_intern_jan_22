import React,{Component} from 'react';
import axios from 'axios';
import OrderDisplay from './orderDisplay';
import Header from '../../header'

const url = "http://localhost:9700/viewOrder"

class ViewOrder extends Component {
    constructor(){
        super()

        this.state={
            orders:''
        }
    }

    render(){
        return(
            <>
                <Header/>
               <OrderDisplay orderData={this.state.orders}/>
            </>
        )
    }

    //all api 
    componentDidMount(){
        let email = sessionStorage.getItem('userInfo').split(',')[1];
        axios.get(`${url}?email=${email}`).then((res) => {this.setState({orders:res.data})})
    }

}

export default ViewOrder