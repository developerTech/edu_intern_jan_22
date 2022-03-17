class restaurantManage{
    restaurantList = [
        {
            id: 1,
            restaurantName: 'KFC',
            address: 'Anand Vihar',
            city: 'Delhi'
        },
        {
            id: 2,
            restaurantName: 'Domino',
            address: 'Savita Vihar',
            city: 'Delhi'
        },
        {
            id: 3,
            restaurantName: 'Burger King',
            address: 'Civil Lines',
            city: 'Pune'
        },
        {
            id: 4,
            restaurantName: 'Subway',
            address: 'Cantonment',
            city: 'Mumbai'
        }
    ];

    ///part1 -b
    printAllRestaurantNames=()=>{
        return this.restaurantList.map((data) => {
            return data.restaurantName
        })
    }

    /// part1-c
    filterRestaurantByCity=(cityName)=>{
        return this.restaurantList.filter((data) => {
            return data.city == cityName
        })
    }
}

var restObj = new restaurantManage()
restObj.restaurantList
(4) [{…}, {…}, {…}, {…}]0: {id: 1, restaurantName: 'KFC', address: 'Anand Vihar', city: 'Delhi'}1: {id: 2, restaurantName: 'Domino', address: 'Savita Vihar', city: 'Delhi'}2: {id: 3, restaurantName: 'Burger King', address: 'Civil Lines', city: 'Pune'}3: {id: 4, restaurantName: 'Subway', address: 'Cantonment', city: 'Mumbai'}length: 4[[Prototype]]: Array(0)
restObj.printAllRestaurantNames()
(4) ['KFC', 'Domino', 'Burger King', 'Subway']
restObj.filterRestaurantByCity('Delhi')
(2) [{…}, {…}]0: {id: 1, restaurantName: 'KFC', address: 'Anand Vihar', city: 'Delhi'}1: {id: 2, restaurantName: 'Domino', address: 'Savita Vihar', city: 'Delhi'}length: 2[[Prototype]]: Array(0)
restObj.filterRestaurantByCity('Mumbai')
[{…}]
///////// part2

var orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
};

var out = 0;
for(key in orderData){
    out += Number(orderData[key]);
}

/*
20/199*100
10.050251256281408
*/

function getPercent(orderData){
    var total = 0;
    for(key in orderData){
        total += Number(orderData[key]);
    }

    var outPut = [];
    var count = 0;
    for(key in orderData){
        var perCentValue = (orderData[key]/total)*100;
        count = count+1;
        let myObj ={}
        myObj.id = count;
        myObj.order =key;
        myObj.order_percentage = `${perCentValue} %`
        myObj.restaurant='Punjabi Tadka'
        outPut.push(myObj)
    }

    return outPut
}

/**
 [
    {   
        id: 1, 
        order: 'Below 500', 
        order_percentage: '10.050251256281408 %', 
        restaurant: 'Punjabi Tadka'
    },
    {
        id: 2, 
        order: '500-1000', 
        order_percentage: '14.572864321608039 %', 
        restaurant: 'Punjabi Tadka'
    },
    {id: 3, order: '1000-1500', order_percentage: '15.07537688442211 %', restaurant: 'Punjabi Tadka'}
    {id: 4, order: '1500-2000', order_percentage: '22.110552763819097 %', restaurant: 'Punjabi Tadka'}
    {id: 5, order: 'Above 2000', order_percentage: '38.19095477386934 %', restaurant: 'Punjabi Tadka'}
]

*/