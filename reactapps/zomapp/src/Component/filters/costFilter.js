import React,{Component} from 'react';
import axios from 'axios';

const url = "https://zomatoajulypi.herokuapp.com/filter"

class CostFilter extends Component{

    filterCost = (event) => {
        let mealId = sessionStorage.getItem('mealId');
        let cost = event.target.value.split('-');
        let lcost = Number(cost[0])
        let hcost = Number(cost[1])
        let costUrl = ""
        if(event.target.value === ""){
            costUrl = `${url}/${mealId}`
        }else{
            costUrl = `${url}/${mealId}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(costUrl)
        .then((res) => {this.props.restPerCost(res.data)})
    }

    render(){
        return(
            <>
                <center>Cost Filter</center>
                <div style={{marginLeft:'15%'}} onChange={this.filterCost}>
                    <label className="radio">
                        <input type="radio" value="" name="cuisine"/> All
                    </label>
                    <label className="radio">
                        <input type="radio" value="100-300" name="cuisine"/> 100-300
                    </label>
                    <label className="radio">
                        <input type="radio" value="301-500" name="cuisine"/> 301-500
                    </label>
                    <label className="radio">
                        <input type="radio" value="501-900" name="cuisine"/> 501-900
                    </label>
                    <label className="radio">
                        <input type="radio" value="901-1200" name="cuisine"/> 901-1200
                    </label>
                    <label className="radio">
                        <input type="radio" value="1201-5000" name="cuisine"/>1201-5000
                    </label>
                </div>
            </>
        )
    }
}

export default CostFilter