let http = require('http');

// req > what we will pass to server
// res > what server will give us back

let server = http.createServer((req,res) => {
    res.write('<h1>First Server with NodeJs App</h1>');
    res.end();
})

server.listen(7600)