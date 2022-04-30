import React,{Component} from 'react';
import Header from './Header';
import Footer from './footer';
import JSON from './db.json';
import Product from './productDisplay'

class Home extends Component {
    constructor(){
        super()

        this.state={
            productData:JSON,
            filteredData:JSON
        }
    }
    /* var a= [1,3,6,8,2]
    a.filter((data) => {return data>5})*/

    filterProduct = (keyword) => {
        let output = this.state.productData.filter((item) => {
            return item.name.toLowerCase().indexOf(keyword.toLowerCase())>-1
        })
        this.setState({filteredData:output})
    }

    render(){
        //console.log(this.state.productData)
        return(
            <>
                <Header userText={(data) => {this.filterProduct(data)}}/>
                <Product prodData={this.state.filteredData}/>
                <Footer year="2022" month="April"/>
            </>
        )
    }
}

export default Home