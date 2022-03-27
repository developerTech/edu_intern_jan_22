let express = require('express');
let app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 8230;
const mongoUrl = process.env.mongoLiveUrl;


app.get('/',(req,res) => {
    res.send("Welcome to Express")
})

//location
app.get('/location',(req,res) => {
    db.collection('location').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

//restaurants
app.get('/restaurants/',(req,res) => {
    // let id = req.params.id;
    // let id  = req.query.id
    // console.log(">>>id",id)
    let query = {};
    let stateId = Number(req.query.state_id)
    let mealId = Number(req.query.meal_id)
    if(stateId){
        query = {state_id:stateId}
    }else if(mealId){
        query = {'mealTypes.mealtype_id':mealId}
    }

    db.collection('restaurants').find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

//restaurantDetails
app.get('/details/:id',(req,res) => {
    //let restId = Number(req.params.id);
    let restId = mongo.ObjectId(req.params.id)
    db.collection('restaurants').find({_id:restId}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})


//menu
app.get('/menu',(req,res) => {
    let query = {}
    let restId = Number(req.query.restId)
    if(restId){
        query = {restaurant_id:restId}
    }
    db.collection('menu').find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

// Connection with db
MongoClient.connect(mongoUrl, (err,client) => {
    if(err) console.log(`Error while connecting`);
    db = client.db('augintern');
    app.listen(port,() => {
        console.log(`Server is running on port ${port}`)
    })
})