// Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button

let hm = document.getElementById('head');
let btn = document.getElementById('btn1');
function change(){
    hm.innerText='mern stack'
}

//-----------------------------------------------------------------------------------


//Write code to get 1st H1 element from a webpage using DOM

let first_head1 = document.getElementsByTagName('h1')[0];
console.log(first_head1);



//-------------------------------------------------------------------------------------------



//Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second


function clock1(){
    setInterval(()=>{
        let currtime = new Date;
    let hours = ("0"+ currtime.getHours()).slice(-2);
    let minutes = ("0"+ currtime.getMinutes()).slice(-2);
    let seconds = ("0"+ currtime.getSeconds()).slice(-2);

    document.getElementById('clock').innerText = hours + ":" + minutes + ":" + seconds;
    },1000);
    
}


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



//Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"
let text = document.getElementById('t1');

function replacetext(){
    
    text.innerText="welcome to elevation academy";
}

//----------------------------------------------------------------------------------------


//Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text

function hide(){
    text.style.visibility="hidden";
}

//-------------------------------------------------------------------------------------------------

//given an array of 0's and 1's find out number of 0's?

let array = [1,0,1,0,1,0];
let count=0;
for(let i of array){
    if(i == 0){
         count=count+1;
    }
}

console.log(count);


//given an array find out total no. of odd and even no?

let arr = [2,3,4,5,6];
let x=0;
let a=0;
for(let i=0 ; i<arr.length ; i++ ){
    if(arr[i]%2==0){
        x=x+1;
    }
    else{
        a=a+1;
    }
}
console.log(x);
console.log(a);


//Given a string find out number of vowels?

let vowels = ["a","e","i","o","u"];

let str = "hi folks";

var S=0
for(let s of str){
    if(vowels.includes(s)){
          S=S+1;
    }
}
console.log(S);



//Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same


let obj1 = {
    a: "this is a string",
    b: ['this', 'is', 'an', 'array']
}

let obj2 = {
    a: "this is a string",
    b: ['this', 'is', 'an', 'array2']
}

function sameArray(o1, o2) {
    let arr1 = o1.b;
    let arr2 = o2.b;

    if(arr1.length != arr2.length) {
        return false;
    }

    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] != arr2[i]) {
            return false;
        }
    }

    return true;
}

console.log(sameArray(obj1, obj2)); // false


//
