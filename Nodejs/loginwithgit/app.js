const express = require('express')
const app = express();
const superagent = require('superagent');
const request = require('request');
const bodyParser = require('body-parser');
const port = 9800;
const cors = require('cors')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(cors());

app.get('/',(req,res) => {
    res.send('<a href="https://github.com/login/oauth/authorize?client_id=9176b4958929e2c28dd6">Login With Github</a>')
})

app.post('/oauth',(req,res) => {
    console.log(req.body)
    const code = req.body.code;
    if(!code){
        res.send('Login Fail')
    }

    superagent
        .post('https://github.com/login/oauth/access_token')
        .send({
            client_id:'9176b4958929e2c28dd6',
            client_secret:'e98972446c28fe8d7e6003982ecb7a0ee8e143dd',
            code:code
        })
        .set('Accept','application/json')
        .end((err,result) => {
            if(err) throw err;
            let access_token = result.body.access_token
            const option = {
                uri: 'https://api.github.com/user',
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `token ${access_token}`,
                    'User-Agent':'mycode'
                }
            }
            request(option,(err,response,body) => {
                return res.send(body)
            })
        })
})

app.listen(port)