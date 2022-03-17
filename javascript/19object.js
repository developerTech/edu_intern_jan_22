var a = {} // Object
var b = [] // Array

var movieName = "Avengers"
var movieRating =  4.5
var movieType = "Action"

var movieName1 = "Jab We Mer"
var movieRating1 =  4.3
var movieType1 = "Romantic"

var movies = {
    name:"Avengers",
    rating:4.5,
    type:'Action'
}

typeof(movies)
'object'
movies.name
'Avengers'
movies.rating
4.5
movies.type
'Action'
movies.lang="English"
'English'
movies
{name: 'Avengers', rating: 4.5, type: 'Action', lang: 'English'}
movies.rating = 4.3
4.3
movies
{name: 'Avengers', rating: 4.3, type: 'Action', lang: 'English'}
delete movies.type
true

movies['name']
'Avengers'
movies['rating']
4.5
movies['rating']= 4.6
4.6
movies
{name: 'Avengers', rating: 4.6, type: 'Action'}

// literal
var movies = {
    name:"Avengers",
    rating:4.5,
    type:'Action'
}

for(key in movies){
    console.log(key)
}

name
rating
type

for(key in movies){
    console.log(movies[key])
}

Avengers
4.5
Action

var movies = [
    {
        "name":"Avengers",
        "rating":4.5,
        "type":"Action"
    },
    {
        "name":"Jab We Met",
        "rating":4.7,
        "type":"Romantic"
    }
]



for(data of movies){
    for(key in data){
        console.log(data[key])
    }
}