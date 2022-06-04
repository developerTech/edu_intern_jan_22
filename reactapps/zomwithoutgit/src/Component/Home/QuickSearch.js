import React,{Component} from 'react';
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay';

const url = "https://zomatoajulypi.herokuapp.com/quicksearch"
class QuickSearch extends Component{
    constructor(){
        super()

        this.state={
            mealType:''
        }
    }
    render(){
        return(
            <div>
                <div id="QuickSearch">
                    <span id="QuickHeading">
                        Quick Search
                    </span>
                    <span id="QuickSubHeading">
                        Discover Restaurants By Meal
                    </span>
                    <QuickDisplay mealData={this.state.mealType}/>
                </div>
            </div>
        )
    }

    // api calling 
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({mealType:data})
        })
    }
}

export default QuickSearch