> map is use to iterate over the array of element
> it always return same length of output array as input
> it is use to apply logics (Add,sub,mul,div)

var a= [4,5,9,3,23,21,34,56,76,85,5,12,47,32]

a.map((data) => {return data*2})
[8, 10, 18, 6, 46, 42, 68, 112, 152, 170, 10, 24, 94, 64]

var a= [4,5,9]
a.map((item) =>  {return `<p>${item}</p>`})
['<p>4</p>', '<p>5</p>', '<p>9</p>']

var a= [4,5,9,3,23,21,34,56,76,85,5,12,47,32]
a.map((data) => {return data>30})
[false, false, false, false, false, false, true, true, true, true, false, false, true, true]

> filter is use to filter out the data
> it may or may not return the same length of output
> it only return those value for which condition or output is true

var a= [4,5,9,3,23,21,34,56,76,85,5,12,47,32]
a.filter((data) => {return data>30})
[34, 56, 76, 85, 47, 32]

var a = [-1,-2,0,1,2]
a.map((data) => {return data*2})
[-2, -4, 0, 2, 4]

var a = [-1,-2,0,1,2]
a.filter((data) => {return data*2})
(4) [-1, -2, 1, 2]

