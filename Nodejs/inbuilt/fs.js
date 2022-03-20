let fs = require('fs');

/*
fs.writeFile('Mycode.txt','My code of node lang', (err) => {
    if(err) throw err;
    console.log('My File Created')
})


fs.appendFile('Mytext.txt',`${Math.random()*1000} This is nodejs code \n`, (err) => {
    if(err) throw err;
    console.log('My File Created')
})


fs.readFile('Mytex.txt','utf-8',(err,data) => {
    if(err) throw err;
    console.log(data)
})


fs.unlink('Mycode.txt',(err) => {
    if(err) throw err;
    console.log('File Deleted')
})
*/

fs.rename('Mytext.txt','Mytext1.txt',(err) => {
    if(err) throw err;
    console.log('File Renamed')
})