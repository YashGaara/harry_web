/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/
let random = Math.random()
console.log(random)
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj = {
  "+":"-",
  "*":"/",
  "-":"*",
  "/":"**",
}

if(random > 0.1){
   // performance correct calculation
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
          
   }
  else{
  //permoce worng calculatiom
  c=obj [c]
  alert(`the result is ${eval(`${a} ${c} ${b}`)}`)

}