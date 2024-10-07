let radius =[4,6,2,3];
 function area(r){
    let result=[]
  for(let i=0;i<r.length;i++)
     result.push (Math.PI*r[i]*r[i])
return result
}

console.log(area(radius))



function diameter(r){
    let result=[]
    for (let i= 0;i<r.length;i++)
        result.push (Math.PI*2*r[i])
    return result

}
console.log(diameter(radius))