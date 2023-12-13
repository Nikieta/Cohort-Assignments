function cutIt(str,startIndex,endIndex){
    let string="";
    for(let i=0;i<str.length;i++){
        if(i>=startIndex && i<endIndex){
            string=string+str[i];
        }
    }
    return string;
    
}
const value="Nikieta";
console.log(cutIt(value,0,7));
console.log(value.slice(0,7));

// // //parseInt is a global function which is used to convert the string basically to an integer. 
console.log(parseInt("42"))
console.log(parseInt("42pcdo"))
console.log(parseInt("4def2"))
console.log(parseInt("wef42fr"))

console.log(parseFloat("42"))
console.log(parseFloat("42geg"))
console.log(parseFloat("4vfd2"))
console.log(parseFloat("4.2"))
console.log(parseFloat("cdsdc4.2"))
console.log(parseFloat("4.2fdvdv"))

// //parseFloat won't convert it to flat.If it is already a float , it'll remain a float.
// //push and unshift
// //pop and shift

const iniArray=[1,2,3];
const finArray=[4,5,6];
// console.log(iniArray.concat(finArray));
for(let i=0;i<finArray.length;i++){
    console.log(iniArray.push(finArray[i]));
    


// }
console.log(iniArray);
// //push-number is passed.If you pass an array, then it'll become another element in the array.
// //concat-array is passed

// //call-backs in js
// //for-each loop
function logThing(str){
    console.log(str);
}
iniArray.forEach(logThing);
// //EXAMPLE OF CALLBACK ,since within the forEach loop argument,another function is passed.

function log1(){
    console.log("hello world 1")
}
function log2(){
    console.log("hello world 2")
}
function logWhatsPresent(fn){
    fn();
}

// //classes and objects

class Animal{
    constructor(name){
        this.name=name;
        this.legCount=legCount;
        this.speaks=Speaks;

    }
//     //static functions are called without instantiating the objects, called upon the class directly.
//     //normal functions are called upon the objects,static functions are not used in this case.
//     //classes are useful and needed since classes consists of attributes written in the constructor and functions
    speak(){
        console.log("hi there"+this.speaks);
    }
}

let dog1={
    name: dog,
    legCount: legCount,
    SPEAKS: "bow bow"

}

let dog=new Animal('dog',4,"bhow bhow");
let cat=new Animal('cat',4,"bhow bhow");

//date is a global class.

const currentDate=new Date();
console.log(currentDate.getDate());
console.log(currentDate.getFullYear());
console.log(currentDate.setFullYear());//set it to some other year

//function of the Date class is to get the time taken to run a particular function .
//or it is the to print the current time and generate a counter sort of thing.
function currentTimePrint(){
    console.log(new Date().getTime());
}
setInterval(currentTimePrint,1000);


//JSON.parse: conversion of a string to an object
//JSON.stringify: conversion of an object to a string
const userf={name:"Harkirat",
gender:"male",
}
const finalString=JSON.stringify(userf)
console.log(finalString)
const users='{"name":"harkirat","age":"24","gender":"male"}';
const user=JSON.parse(users);
console.log(user["age"])


function square(n){
    return n*n;
}


function sumOfSomething(a,b,fn){
    console.log(fn)
    const val1=fn(a);
    const val2=fn(b);

    return val1+val2;
}


console.log(sumOfSomething(1,2,function (n){
    return n*n*n;
}))
//anonymous fns are when you pass the function defn as the argument and don't call the fn explicitly.You pass it as an argument without even naming the fn.tht is why it is anonymous

//Sync functions:Together one after the another,sequential only one thing happening at a time.  ite of synchronous happens in parts,multiple things are context switching with one another. 


function findSum(n){
    let ans=0;
    for(let i=0;i<n;i++){
      ans+=i;
      
  }
    return ans;
    
  }
  
    function findSumTill100(){
      console.log( findSum(100));
    }
  
    setTimeout(findSumTill100,1000)
    console.log("hello world");

}

//fs.reADfILE

const fs=require("fs");
//requires an extra library called fs file system

fs.readFile("a.txt","utf-8",function(err,data){
  console.log(data);
  
})
//lets you read from a file  
//takes very long, longer than the file read
console.log("hi there");
let a=0;
for(let i=0;i<100000;i++){
  a++;
  
}
console.log("hi there 2");


// hi there
// hi there 2
// hi there from a.txt

//in sync fns only call stack is required.
//in async function, basically when the program is running in the call stack and an async function is found,then it is pushed in the web API and after the clock timer runs out,the function is pushed in the call queue ,after which it is pushed in the call stack using the event loop,and the program runs after that.

//to avoid calllback hell,we use promises
//the promise is returned synchronously,while the data is returned async
//the object created out of the promise class would have the first arg as a function and the the func would have the first arg as resolve.

