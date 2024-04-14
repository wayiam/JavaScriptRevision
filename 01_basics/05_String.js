// String are of two types in JS
//1.Primitive --> that is any text or character in the quotes (double or single) it's always present in the stack memory and uses Pass by value
//2. Obejec --> String can be of object type this is usally called wrapper class 


//String and Prototype methods 
let myString = "This is a String Value";
let mysecondString = "I am also String Value"
let arr = myString.split(' ')
console.log(arr);
console.log(myString.split(' ',0, 13));
console.log(myString.charAt(4));
console.log(myString.length);
console.log(`This is example of Concotaion ${myString} and ${mysecondString}`);

//converting integer,boolean,obj into string
 
let integerValue = 6;
let booleanValue = false;
let objValue = [1,2,3];
console.log("i was array" + typeof objValue);
// Using constructor 
let integertoString = String(integerValue)
console.log(typeof integertoString)

//Using to String method
let objValueToString = objValue.toString(objValue);
console.log(typeof objValueToString);

let num = 123;
let strNum = num.toString(); // Converts number to string
console.log(typeof strNum); // Output: "string"

let bool = true;
let strBool = bool.toString(); // Converts boolean to string
console.log(typeof strBool); // Output: "string"

let arrr = [1, 2, 3];
let strArr = arrr.toString(); // Converts array to string
console.log(typeof strArr); // Output: "string"
