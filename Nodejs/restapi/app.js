let express = require('express');
let app = express();
let port = 8230;

let city = [
    {
      "location_id": 1,
      "location_name": "Ashok Vihar Phase 3, New Delhi",
      "state_id": 1,
      "state": "Delhi",
      "country_name": "India"
    },
    {
      "location_id": 4,
      "location_name": "Bibvewadi, Pune",
      "state_id": 2,
      "state": "Maharashtra",
      "country_name": "India"
    },
    {
      "location_id": 8,
      "location_name": "Jeevan Bhima Nagar, Bangalore",
      "state_id": 3,
      "state": "Karnataka",
      "country_name": "India"
    },
    {
      "location_id": 13,
      "location_name": "Sector 40, Chandigarh",
      "state_id": 4,
      "state": "Punjab",
      "country_name": "India"
    }
  ]

app.get('/',(req,res) => {
    res.send("Welcome to Express")
})

app.get('/list',(req,res) => {
    res.send("This is list Route")
})

app.get('/city',(req,res) => {
    res.send(city)
})

app.listen(port,()=> {
    console.log(`Server is running on port ${port}`)
})