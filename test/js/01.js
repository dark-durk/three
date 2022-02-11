let person={
  name:'xiaoming',age:21,phone:13383834329,likeColor:'red'
}
let p1={
 address:'hunan'
}
p1.__proto__=person

for(let item in p1){
  console.log(item,p1[item])
}

console.log('-----------------')
Object.keys(p1).forEach(function(key){
  console.log(key,p1[key])
})