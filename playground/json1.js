const fs = require('fs')

const book = {
    "name":"sai",
    "age":"22",
    "sex":"male"
}
const jsonstr=JSON.stringify(book)
fs.writeFileSync('json1.json',jsonstr)
//console.log(jsondata.name) error because jsonstr is astring

const dtbf=fs.readFileSync('json1.json')
const dtbfstr = dtbf.toString()
const user = JSON.parse(dtbfstr)
console.log(user)
console.log(user.name)
user.name = 'Chakilam Saideep Guptha'
user.age = '23'
console.log(user.name)


const edata = JSON.stringify(user)

fs.writeFileSync('json1.json',edata)
