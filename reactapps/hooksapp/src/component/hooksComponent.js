import React,{useState,useEffect} from 'react';
import DisplayComponent from './displayComponent';


const HooksComponent = () => {
    const [title] = useState('React Hooks App')
    const [count,setCount] = useState(1)
    const [count1,setCount1] = useState(1)
    const [city,setCity] = useState()

    const updateCount = () => {
        setCount(count+1)
    }

    const url = "https://zomatoajulypi.herokuapp.com/location"

    useEffect(() => {
        console.log("inside useEffect")
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setCity(data)
        })
    },[])

    return (
        <>
            <h1>{title}</h1>
            <h1>{count}</h1>
            <button onClick={updateCount}>Counter</button>
            <h1>{count1}</h1>
            <button onClick={() => {setCount1(count1+1)}}>Counter</button>
            <DisplayComponent locData={city}/>
        </>
        
    )
}

export default HooksComponent