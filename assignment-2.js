//Write a   program to calculate the length of a string. 
//let st = "Shantanu"
//console.log(st.length)

//Write a   program to add 'ing' at the end of a given string (length should be at least 3). If the given string already ends with 'ing' then add 'ly' instead. If the string length of the given string is less than 3, leave it unchanged. 
//Sample String : 'abc'
//Expected Result : 'abcing' 
//Sample String : 'string'
//Expected Result : 'stringly'

//let st = prompt("Enter your 3 length string")
//if (st.length == 3){
//    alert(st+"ing")
//    
//}
//else if(st.length>3 || st.length=="ing"){
//    alert(st+"ly")
//}


//Write a  program to get a single string from two given strings, separated by a space and swap the first two characters of each string. 
//Sample String : 'abc', 'xyz' 
//Expected Result : 'xyc abz'

//let st = prompt("Enter your first sting..")
//let st2 = prompt("Enter your second string..")
//let ans = alert(st+" "+st2)

//Write a   program to get a string made of the first 2 and the last 2 chars from a given a string. If the string length is less than 2, return instead of the empty string. 
//ample String : Hello World'
//Expected Result : 'Held'

//let st = prompt("Enter your sting..")
//if (st.length<=2){
//    alert(" ")
//}
//else {
//    a = st.slice(0,2)
//    b = st.slice(-2)
//    alert(a+b)
//}


/****************array******************** */


/*
1.Write a simple JavaScript program to join all elements of the following array into a string.
 Go to the editorSample array :
  myColor = ["Red", "Green", "White", "Black"];
  Expected Output :"Red,Green,White,Black"
                    "Red,Green,White,Black"
                    "Red+Green+White+Black"
*/

/*let myColor = ["Red", "Green", "White", "Black"];
 let separator1 = "," 
 let separator2 = "," 
 let separator3 = "+" 

let result1 = myColor.join(separator1)
let result2 = myColor.join(separator2)
let result3 = myColor.join(separator3)

console.log(result1)
console.log(result2)
console.log(result3)
*/


//let arr = [5, 2, 1, -10, 8];

//let arr = [5, 2, 1, -10, 8];
//let arr1 = arr.sort()
//console.log(arr.reverse())

/*
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.
*/


/*

3.Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.

For instance:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)


*/
/*
function min(){
    let arr1 = []
    arr.forEach(el => {
        if(el<=4){
            arr1.push(el)
        }
        
    });
    alert(arr1);

}
let arr = [5, 3, 8, 1];
min()
 // 3,1 (matching values)

alert(arr); // 5,3,8,1 (not modified)
*/
/*
let fu = function(...arr){
    for (x of arr) {
        console.log(x)
        
    }
}

fu(10,20,0,40,50,60,70,80,90)
*/

/*
class Student{
    constructor(arg1,ar2){
        
        this.arg1 = arg1
        this.ar2 = ar2
        console.log(arg1+ar2)
    }
    Add() {
        
        console.log("Hello constructor...")
    }    
}

test = new Student(40,60)
test.Add()
*/

class Calculate{
    constructor(arg1, arg2){
        this.num1 = arg1
        this.num2 = arg2
           }
    add(){
        console.log("Addition" + num1 + num2)
    }
    sub(){
        console.log("substraction" + num1 - num2)
    }
    mult(){
        console.log("Multi" + num1 * num2)
    }
}


num1 = prompt("Enter first number..")
num2 = prompt("Enter your second number")
test = new Calculate(num1,num2)
test.add()
test.sub()
test.mult()