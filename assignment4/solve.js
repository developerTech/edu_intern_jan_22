var ratingData = [
    {restaurant: 'KFC', rating:5},
    {restaurant: 'Burger King', rating:4},
    {restaurant: 'KFC', rating:3},
    {restaurant: 'Domino', rating:2},
    {restaurant: 'Subway', rating:3},
    {restaurant: 'Domino', rating:1},
    {restaurant: 'Subway', rating:4},
    {restaurant: 'Pizza Hut', rating:5}
]

let distinct = [];
for(i=0;i<ratingData.length;i++){
    if(distinct.indexOf(ratingData[i].restaurant) === -1){
        distinct.push(ratingData[i].restaurant)
    }
}

// ['KFC', 'Burger King', 'Domino', 'Subway', 'Pizza Hut']

let unique = ['KFC', 'Burger King', 'Domino', 'Subway', 'Pizza Hut'];
let avgRating = [];
let outRating = 0;
let count = 0;

for(i=0;i<unique.length;i++){
    for(j=0;j<ratingData.length;j++){
        if(unique[i] == ratingData[j].restaurant){
            outRating += ratingData[j].rating;
            count = count+1
        }
    }

    var output = Number(outRating)/Number(count);
    var myobj = {};
    myobj.restaurant = unique[i];
    myobj.avgRating = output;
    avgRating.push(myobj);
    count = 0;
    outRating = 0
}

// part B
var output = [
    {restaurant: 'KFC', avgRating: 4},
    {restaurant: 'Burger King', avgRating: 4},
    {restaurant: 'Domino', avgRating: 1.5},
    {restaurant: 'Subway', avgRating: 3.5},
    {restaurant: 'Pizza Hut', avgRating: 5}
]


output.filter((data) => {return data.avgRating>=4})
