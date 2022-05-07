import React from 'react';
import {Link} from 'react-router-dom'
 
const QuickDisplay = (props) => {

    const listMeal = ({mealData}) => {
        console.log(">>>mealData111",mealData)
        if(mealData){
            console.log(">>>mealData",mealData)
            return mealData.map((item) => {
                return(
                    <Link to={`/listing/${item.mealtype_id}`} key={item._id}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src={item.meal_image} alt={item.mealtype}/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    <span>{item.mealtype}</span>
                                </div>
                                <div className="componentSubHeading">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }

    return(
        <div id="mainContainer">
            {listMeal(props)}
        </div> 
    )
}

export default QuickDisplay