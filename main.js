const a = [1, 3, 4, 2, 7, 9, 10, 8]
const b= [1,  3, 9, 11, 5, 7, 13]
const c = a.filter((i1)=>b.some((i2)=>i2===i1))
console.log(c)