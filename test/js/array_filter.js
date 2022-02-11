let arr=[{'start':1,'end':2},{'start':1,'end':2}]
let s=new Set(arr)
console.log(s)

const res_arr=[]
for(let i=0;i<arr.length;i++){
  if(i===1) res_arr.push(arr[i])
  for(let j=0;j<res_arr.length;j++){
    if(arr[i].start===res_arr[j].start) break
    res_arr.push(arr[i])
  }
}
console.log(res_arr)