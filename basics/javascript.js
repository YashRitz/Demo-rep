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