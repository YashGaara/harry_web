function nice(name){
    console.log("Hey "+name + " you are nice!")
    console.log("Hey "+ name + " you are nice!")
    console.log("Hey "+ name +" you are nice!")
    console.log("Hey "+ name +" you are nice!")  
  }
  
  nice("yash")
  
  function sum(a,b, c=3){
  //console.log(a+b)
    return a + b + c
  }
  result1 = sum (3,5)
  result2 = sum (7,5)
  result3 = sum (3,13,1)
  
  console.log("the sum of these number: ", result1)
  console.log("the sum of these number: ", result2)
  console.log("the sum of these number: ", result3)
  
  const func1 = (x)=>{
    console.log("I am an arrow function", x)
  }
  
  func1(34);
  func1(66);
  func1(84);