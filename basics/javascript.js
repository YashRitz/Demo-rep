// // //console.log("hello naman")
// // //const king ="rome"
// // //let King = null
// // //let password = 12345;{


// // //let King ="Rose"
// // //console.table([king,King,password]) // used for printing multiple items at a time //

// // //}
// // //"use Strict" treats all the java version as new 

// // // we cannot use alert(3+3) here as it is a node js code//it can run in the browser only
// // //console.log(typeof king)
// // //console.log(typeof King)// NULL HAS A TYPEOF OBJECT BUT UNDEFINED VALUE HAS A TYPEOF UNDEFINED ONLY//
// // //let n = "33abc"
// //  //let valueinNumber = Number(n);
// //  //console.log( typeof valueinNumber)  
// //  //console.log(valueinNumber)
// //   // for a vlue of 33 => number 33
// //   //for "33abc" => Nan
// //   //for null => 0
// //   //for true => 1
// //   //false=>0
// //   //let booleanloggedin = "null"
// //   ///let booleanvalue =Boolean(booleanloggedin)
// //   //console.log(booleanvalue)
// // // when we give boolean 1 it returned us true//
// // //when no value "" =>false
// // //whenn given a string it returned us true//

// // //******************************OPERATORS*************************************************************//

// // //== works differently as when compared with null operator it treats null operator as 0//
// // //=== works differently as it checks both the number as well aas its datatype
// // // console.log("2"== 2)
// // // console.log("2"=== 2)
// // //</> => works differnetly as when compared with  null it treats it as null only//
 
// // //-----------------------------datatypes--------------------------------------//

// // //primitive - bigint string number null  undefined symbol
// // //non primitive- array function object

// // //imp info - null has a type of object
// // //and function has a type of function 
// // // rest all primitive dataq types are their own types like string type of is string only//
// // //and all non primitivce datatype are objects only
// // //java is a dynamically typed language as it gets detemined by itself in runtime and we have not to detemine this during codes//

// // //----------------------------------------Memory--------------------------------------//

// // // the value are stored in the meory by two ways --
   
// //   // 1. Stack(primitive)
// //   // 2. heap((non-primitive)

// //   // when we use primitve dataypes for our work then a copy of the primitve datatypes are gien to the user by which the main value 
// //   // remains Intact-- stack

// //   // but when we use nono pri mitve datatypes for work then a reference or oringal value is gien to the user for work and when the user change the refernce code then the actually code also get changed
// //   //heap

// //   //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-Strings-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//

// //    const name ="yash" ; const Hname =new String("yash")
// //    const lastname ="dariyal"

// //    //console.log(name + lastname + "50");console.log(`hello my ${Hname}${lastname}and my networth is 50 rs`)
  
// //   // String functions

// //     // const Subname="yash dariyal"
// //     // let gamename= Subname.charAt('3')
// //     // console.log(gamename);
// //     //   console.log(Subname.indexOf('h'))
// //     //   console.log(Subname.substring(1,4))//value cannot get reversed and cannot write negative value
// //     //   const slice=Subname.slice(-8,4)
// //     //    console.log(slice)//value can get reversed and we cna also write in the negative way
// //     //    console.log(Subname.split("h")) 
// //     //    const balance =new Number(2)
// //     //    console.log(balance.toString().length) //conversion of number to string
// //     //    const number= 124.5555
// //     //    console.log(number.toPrecision(4));// used to get a precise number//
       
// //     //    const hundred = 100000
// //     //    console.log(hundred.toLocaleString('en-IN'))// add pointer /comma in the value to understand the calue clearly

// //     //---------------------------------MATHS --------------------------------------------//

// //    // maths functions

// //   //  console.log(maths.abs(-5)) returns a postitive value and converts a negative into positive
// //   //  console.log(maths.round(4.2));
// //   //  maths.ceil(3.4) --returns 4 if greater than 3
// //   //  maths.floor(4.3)--returns 4 if greatrer than 4
// //   //  maths.min(1,2)
// //   //  maths.max(1,24,5,)       
        
      
// //     // console.log(Math.random())//gives value bteween 0 and 1 only
// //     // console.log((Math.random()*10)+1)
// //     // console.log(Math.floor(Math.random()*10)+1)//by dividing it ot 10 it gives the value above 0 to 9 and if we want to get the value above 0  we can use  math.floor  by which we can take out he big value//

// //     // const max= 3
// //     // const min =1;
// //     // console.log(Math.floor(Math.random()*(max-min+1)+min))// by this we can get the value between 10 to 25//
    
// //     // const Naam ="Yash"
// //     //  console.log(Naam.toUpperCase());
// //     //  console.log(Naam.indexOf("h"))
// //     //  console.log(Naam.charAt(3))
// //     //  console.log(Naam.substring(0,4))
// //     //  console.log(Naam.slice(0,4))
// //     //  console.log(Naam.slice(-2))
// //     //  console.log(Naam.trim())
// //     //  console.log(Naam.replace("Y","-"))
// //     //  console.log(Naam.includes("Yash"))
// //     //  const Flight = "Yash%20Dariyal"
// //     //  console.log(Flight.split("%20"))

    
// //     // const balance= 100.1111;
// //     // //  function
// //     // //  .toString()-converts any item into String
// //     // //  .tofixed(how many value you want after decimal)-takes how many value you want after decimal
// //     // console.log(balance.toPrecision(3))
// //     //  2. .tolocalestring(en-in)

// //     ==================================DATES============================================

// // const mydate = new Date()
// // console.log(mydate.toLocaleString())
// // console.log(mydate.toJSON())
// // console.log(mydate.toDateString())
// // and related many more function about date
// // ______________________________________________ARRAYS_________________________________________________________________

// const arr =["areola",1,2,3,4]
// // or 
// const arr2 = new Array("areola",12,23,45)
// // console.log(arr[3])
// console.log(arr2[2])

// ------------------------------------------------Array functions--------------------------------------------------
// console.log(arr.push("ghiya"))
// console.log(arr)
// console.log(arr.pop())
// console.log(arr.unshift("hinge"))
// console.log(arr)
// console.log(arr.shift())
// console.log(arr)

// console.log(arr.includes("areola"))
// console.log(arr.indexOf("areola"))
// let array234 = arr.join()
// console.log(typeof array234)
// console.log(arr)
// console.log(arr.slice(1,3))-slice does not manupulates the original array itself
// console.log(`A ${arr}`)
// console.log(arr.splice(1,3))-splice manupulates the original array itself
// console.log(`B ${arr}`)
// console.log(arr)

//______________________________________Array merging--------------------------

// const heroes =["shaktimaan","naagraja","bilota"]
// const avengers =[ "captain america","iron man",'wulkong']
// // console.log(heroes.push(avengers))
// // console.log(heroes)
// const allheroes =heroes.concat(avengers)
// console.log(allheroes)
// let hinge =[...heroes,...avengers]
// console.log(hinge);

// const arr= [1,2,3,4,[5,6],78,[6,7,8,[90]]]
// console.log(arr)

// const newarr=arr.flat(Infinity)
// console.log(newarr)

// const another = Array.isArray(["yash"])// check whether it is an array or not
// console.log(another)
// const anotherarr = Array.from("yash")//used to make an element an array
// console.log(anotherarr)

// const repo = Array.from({class : 4}) //cannot make a array of an object ##interesting 
// console.log(repo)

//multiple arrays in an array
// const names = "yash"
// const him = "kin"
// const and = "kin"
// const anotherarr =Array.of(names,him,and)//multiple set of array + multiple strings as array
// console.log(anotherarr);

// ___________________________________________objects_________________________________________

//singleton-Generally are made from constructors
//object .create

//objects literals
// const mysym = Symbol("key")//to access symbole in objects as a key
// const resume = {
//     name: "yash",
//     [mysym]:"key1",//accessing symbol by only this way or it will act as a object
//     "Fullname" : "Yash Dariyal",
//     profession: "Media house",
// }

// console.log(resume.Fullname)//1 way of accesing object
// console.log(resume["Fullname"])//2 way of accesing objects
// console.log([mysym])

// resume.profession ="Actor"//it is object a way to change
// console.log(resume.profession)

// Object.freeze(resume)//freezing the object  makes it unchangeable
// resume.profession ="Actor and director"
// console.log(resume)

// resume.greetings = function(){  // defining a function in an object
//     console.log(`hello there`)
// }
// console.log(resume.greetings())

// resume.greeting = function(){ 
//     console.log(`hello there,${this.name}`)  //${this} it is a element by which we can access the current object
// }
// console.log(resume.greeting())

const tin = new Object //it is a singleton object made from constructor 

//const tin = {} //it is non singleton object

// console.log(tin)

const obj = {
    fullname: "king",
    2 : {
          lastname: "Dariyal",
          3: {
            middlename :"Singh"
          }
    }
}
//console.log(obj)


// const obj4 = {obj1,obj2} //not a function for merging


//object merging techniques
const obj1 = {dp : "None" } //1
const obj2 = {quote: "Design for the show not for the future"}
//const obj4 = {obj1,obj2} //not a function for merging
const obj4 = {...obj1,...obj2,} //spread method //1
 const obj3 = Object.assign({},obj2,obj1);//2
// console.log(obj3)



//object inside an array
const user = [
  {
    id: "1234",
    location :{
      navigate: "lucknow"}
  }
]
// console.log(user[0].location)
// console.log(Object.keys(obj));//to get all zero index keys
// console.log(Object.values(user))//to get the values of all keys
// console.log(Object.entries(user))//gives both key and values
// console.log(obj.hasOwnProperty("fullname"))//to check whether the desired  value is therir or not

// //for more function of object
// define the object inconsole
// const obj = {
            
// }
// object de structre{way of defining an object}

const morse = {
  code:1,
  code:2
}
// console.log(morse.code)
//or
const {code} = morse;// a waqy to define object
// console.log(code)
// or
 const {code:cmd} = morse;
//  console.log(cmd)

 //--------------------------Api-----------------------------------------

 {
  operator:"yash"
  coordinator:"bhola"
  satisfies:"creator"
 }
 //------------------------------Functions ------------------------

              //parameters- are the functions
//  function add(number1,number2)
//  {

//   console.log(number1 + number2) //the value becomes undefined and does not get stored in the result as we have  printed the result and not stored it

//  }


//correct way to store result value
//  function add(number1,number2)
//  {

//   // let result =(number1 + number2) //the value becomes undefined and does not get stored in the result as we have  printed the result and not stored it
//   // return result;
//   //or
//   return number1 + number2

//  }

//  const result= add(2,3) //Arguments are the calling values
//  console.log(`result : ${result}`
//  )
// function loginuser(username) {
//   if(username===undefined){//in this situation the code sholud be true to run
//     console.log(`please enter you gamer id`)
//     return
//   }
 
//   return(` ${username} logged in`)
// }


// function loginuser(username) {
//   if(username===undefined){//in this situation the code sholud be true to run
//     console.log(`please enter you gamer id`)
//     return
//   }
 
//   return(` ${username} logged in`)
// }

function loginuser(username ="sam") {//if you want a default value when the user gives nothing then we can igve it adefault value
  if(!username){//in this situation the code sholud be false to run
    console.log(`please enter you gamer id`)
    return
  }
 
  return(` ${username} logged in`)
}
//  console.log(loginuser())//when nothing is given then it returns a undefined
 
 function cartcalculator(...num){//...num -- is a rest operator whiuch takes multiple values in a function and convertsuii it in a array
    return num
 }
//  console.log(cartcalculator(200,400,4000,5506)) 
 
// --------------------Accessing object in afunction ------------------------------------

//  const object1 ={
//   username: "yash",
//     price : 999
//  }

 function handleobject(anyobject) { 
  return (`username is ${anyobject.username} and price is ${anyobject.price}`)
 }

  // console.log(handleobject(object1))
  // // console.log(handleobject({ // by this we can overwrite the oject or we can create the object by using the function name handle object
  //   username : "yash dariyal",//creating object by function name separately
  //   price : 555
  // }))
 
  function handlearray(anyarray){//by this we can add array to a function
    return anyarray[3]
  }
  // console.log(handlearray([//by this we can add / create an array
  //   12,55,22,44,22236,
  // ]))
  

//--------------------------------Scope of variables-----------------------------------------

// var --is available both in global and block scope hence problematic
// let -- is availble both in global and block but block scope value and global scope values differ
// const-- is availble both in global and block but block scope value and global scope values differ and
// but can not be changed again

if(true){
  //block scope
}
//full body -- global scope


//----------------------------------------Closure------------------------

if(true){//parent
  let user = "king"
  if(user =="king"){//child

    const website = "yashgoggle.com"
    // console.log(website + user)
  }
  // console.log(website)
}
//child parent ko acess kar sakta hai bu parent child ko nhi kyuki child ke liye toh uskai parent he global scope hai na


//____________________________________________This and Arrow Function____________________

// this -- is a functiion used for knowing the current context of the block scope

// const one = { //it only works with object not singly with functions
//   username: "yash",
//   price : 999,
//   functiontwo() {
//     console.log(this.username + this.price)
//     console.log(this)
//   }
// }
// one.functiontwo()
// //this function does work independently with only function it needs some object or array to show value
// console.log(this)//In node the scope of this is global scope and hence shows empty {} but in browser its shows the window propety which is callled the window scope/glbal scope  


// function two()  {//node properties
//   console.log(this)
// }
// two()

// function two() {
//   let username = "ritz"
//   console.log(this.username)//cannot print value in a function until unless bagged by an object
// }

// two()

// ________________=><=___________________________________________________________________arrow functions

//Diefferent way to write arrow function-------------------
const arrow = () => {//whenused braces then we have to use return function
  return(this)
}

// console.log(arrow())
//or
const chai= () => ( "add water and boil")//when we uses paranthesis inplace of braces then its no tinportant to use return
//  console.log(chai())
//  or//

 const sub =(number1,number2) => ({username:"yash khangta vlogs"})//to show object we have to use paranthesis
//  console.log(sub(5,9))

const sub2 =(number1,number2) => {username:"yash khangta vlogs"}//to show object we have to use paranthesis
// console.log(sub(5,9))



// ===========================IIFE(immediately invoked function expression)========================

//Explicit function -which contain a return function statement 
(function gigachad(rollno) {
  // console.log(`Your blue tooth device is ready to pair ${rollno}`)
})(21);//to write two iife function togehter then we have to use semi colon to separeate them as it will show errors 
   // IIFE function doesnt know where to stop so it run all over as a result we have to use semicolon tostop it 

   //implicit function
((name)=>{
  // console.log(`your device is readt to pair ${name}`) as this file doesn't contain return function as a result we say it as implicit function
})("YASH")

// ******************************************************************************************************