var a = "amSterDam";
var b = "ParIS"
undefined
a.toLowerCase()
'amsterdam'
a.toUpperCase()
'AMSTERDAM'
a.length
9
a[0]
'a'
a[2]
'S'
a.charAt(0)
'a'
a.charAt(1)
'm'

var a = "John"
undefined
var b = "john"
undefined
a == b
false
a.toLowerCase() == b.toLowerCase()
true
var b = "jOHn"
undefined
a.toLowerCase() == b.toLowerCase()
true

var a = "John"
undefined
a.slice(1)
'ohn'
a.slice(2)
'hn'
var city = "Amsterdam"
undefined
a.slice(-1)
'n'
city.slice(-1)
'm'
city.slice(2,5)
'ste'
city.slice(0,4)
'Amst'
city.slice(0,-1)
'Amsterda'
city.slice(0,-2)


var a = "amSterDam";
undefined
a.charAt(0).toUpperCase()
'A'
a.slice(1).toLowerCase()
'msterdam'
a.charAt(0).toUpperCase()+a.slice(1).toLowerCase()
'Amsterdam'


var city = "paRIs"
undefined
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Paris'

var a = " Nikita. "
undefined
a.length
9
a.trim()
'Nikita.'
var a = " Nikita. . "
undefined
var a = " Nikita . "
undefined
a.trim()
'Nikita .'
a.replace(' ','')
'Nikita . '
a.replace(/ /g,'')
'Nikita.'
var a = "i am learning javascript"
undefined
a.replace('javascript','js')
'i am learning js'
var a = "javascript i am learning javascript"
undefined
a.replace('javascript','js')
'js i am learning javascript'
a.replace(/javascript/g,'js')
'js i am learning js'
var a = "hii";
undefined
var a = "javascript i am learning javascript"
undefined
var b = "Hii"
undefined
a.replace(/javascript/g,b)
'Hii i am learning Hii'

a.repl