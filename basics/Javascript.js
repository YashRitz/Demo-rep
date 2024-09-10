//console.log("hello naman")
//const king ="rome"
//let King = null
//let password = 12345;{


//let King ="Rose"
//console.table([king,King,password]) // used for printing multiple items at a time //

//}
//"use Strict" treats all the java version as new 

// we cannot use alert(3+3) here as it is a node js code//it can run in the browser only
//console.log(typeof king)
//console.log(typeof King)// NULL HAS A TYPEOF OBJECT BUT UNDEFINED VALUE HAS A TYPEOF UNDEFINED ONLY//
//let n = "33abc"
 //let valueinNumber = Number(n);
 //console.log( typeof valueinNumber)  
 //console.log(valueinNumber)
  // for a vlue of 33 => number 33
  //for "33abc" => Nan
  //for null => 0
  //for true => 1
  //false=>0
  //let booleanloggedin = "null"
  ///let booleanvalue =Boolean(booleanloggedin)
  //console.log(booleanvalue)
// when we give boolean 1 it returned us true//
//when no value "" =>false
//whenn given a string it returned us true//

//******************************OPERATORS*************************************************************//

//== works differently as when compared with null operator it treats null operator as 0//
//=== works differently as it checks both the number as well aas its datatype
// console.log("2"== 2)
// console.log("2"=== 2)
//</> => works differnetly as when compared with  null it treats it as null only//
 
//-----------------------------datatypes--------------------------------------//

//primitive - bigint string number null  undefined symbol
//non primitive- array function object

//imp info - null has a type of object
//and function has a type of function 
// rest all primitive dataq types are their own types like string type of is string only//
//and all non primitivce datatype are objects only
//java is a dynamically typed language as it gets detemined by itself in runtime and we have not to detemine this during codes//

//----------------------------------------Memory--------------------------------------//

// the value are stored in the meory by two ways --
   
  // 1. Stack(primitive)
  // 2. heap((non-primitive)

  // when we use primitve dataypes for our work then a copy of the primitve datatypes are gien to the user by which the main value 
  // remains Intact-- stack

  // but when we use nono pri mitve datatypes for work then a reference or oringal value is gien to the user for work and when the user change the refernce code then the actually code also get changed
  //heap

  //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-Strings-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//

   const name ="yash" ; const Hname =new String("yash")
   const lastname ="dariyal"

   //console.log(name + lastname + "50");console.log(`hello my ${Hname}${lastname}and my networth is 50 rs`)
  
  // String functions

    const Subname="yash dariyal"
    let gamename= Subname.charAt('3')
    console.log(gamename);
      console.log(Subname.indexOf('h'))
      console.log(Subname.substring(1,4))//value cannot get reversed and cannot write negative value
      const gne = Subname.slice(-8,1)//value can get reversed and we cna also write in the negative way
     console.log(gne)
      
    