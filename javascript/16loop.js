for
while
do while
for of
for in
////////////////////////////////
//iterarte over the array as well as print the series
for(var i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var city = ['Nice', 'Mumbai', 'London', 'Amsterdam']

for(i=0;i<city.length;i++){
    console.log(city[i])
}

Nice
Mumbai
London
Amsterdam

var city = ['Nice', 'Mumbai', 'London', 'Amsterdam']

for(i=0;i<city.length;i++){
    console.log(`<li>${city[i]}</li>`)
}

<li>Nice</li>
<li>Mumbai</li>
<li>London</li>
<li>Amsterdam</li>


var city = ['Nice', 'Mumbai',['Red','Yellow','Green','Olive'], 'Helsinki', 'Venice', 'Amsterdam']

for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])
    }
}

// while
var i = 10
while(i<5){
    console.log(i);
    i++
}

// do while
var i = 10;
do{
    console.log(i);
    i++
}
while(i<5)

/////es6
for of
///////

var city = ['Nice', 'Mumbai', 'London', 'Amsterdam']

for(mycity of city){
    console.log(mycity)
}
Nice
Mumbai
London
Amsterdam


var city = ['Nice', 'Mumbai',['Red','Yellow','Green','Olive'], 'Helsinki', 'Venice', 'Amsterdam']

for(mycity of city){
    if(Array.isArray(mycity)){
        for(mycolor of mycity){
            console.log(mycolor)
        }
    }else{
        console.log(mycity)
    }
}

