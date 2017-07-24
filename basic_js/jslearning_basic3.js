
// on class  https://godgunman.github.io/modern-js-class/#/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions 

let numbers = [3,13,44,55,33, 110,-20];
let results =[];
let results_unshift = [];
let results_push = [];

for(let num of numbers)
    {
        results_unshift.unshift(num); //vs  array.put() 從最後面塞value ;  array.unshift()從最前面塞
    }

console.log(results_unshift);

for(let i =0; i < numbers.length ; i++){
    //results[i] =  numbers[numbers.length-1-i];
    results_push.push(numbers[numbers.length-1-i]);
}
console.log(results_push);
console.log(numbers.reverse());

let tmp = 0;
for(let i =0; i < numbers.length/2 ; i++){
    tmp =numbers[i];
    numbers[i] =  numbers[numbers.length-1-i];
    numbers[numbers.length-1-i] =tmp ;
}
console.log(numbers);

function price1(a,b){
    return a*b ;
};

const price2 = function(a,b){ return a+' '+b+'john' ;} //匿名函式
//let , const -> ES6
console.log(price1(100,2), price2(2,2));

//Es6 : 箭頭函式
//------- arrow function  
//放在 function 與 class 中使用 ，list指向的地方是不一樣的 ??
//https://pjchender.blogspot.tw/2017/01/es6-arrow-function.html
let price3 = ( objectPrice , objectNumb) =>{ return objectPrice*objectNumb;};
console.log(price3(100,3));
let price4 = () => console.log('3000');
price4();

//當函數只有一個參數時，不需要使用括號
// let getMax =  (numbers) => { ... }
//let getMax =  (arrays = numbers) => {
let getMax =  arrays  => {
    let max = Number.MIN_VALUE;
    for(let num of arrays)
        {
            if(num > max) {max = num}
        }
        return max;
}
    console.log("max: "+ getMax(numbers));

//箭頭函數當中的 this 是定義時的對象，而不是使用時的對象
//::在箭頭函數中，this 指稱的對象在所定義時就固定了，而不會隨著使用時的脈絡而改變

// to study ......... not yet finsih.....

//-------end arrow function 

let speakyourName =(name)=> {return " ciao,"+name ;};
let tmpName = "test";

const printNum = (number, index , array ) => {
    console.log(number, index , array);
}
const sayHello = (user , index) => { console.log("hi, "+ user + " , u r number."+ index  );};
const sayHello2All = (user , index , allpeople) => { console.log("hi, "+ user + " , u r number."+ index + " say hello to", allpeople  );};
const sayHello2All3 = (user , index , allpeople) => { 
    console.log("hi, "+ user + " , u r number."+ index + " say hello to", allpeople  +":"+JSON.stringify(this, null, 2));
    this.value = 1
};

let numbers2 = ['a','b','c','d'];

// numbers2.forEach(printNum);
// numbers2.forEach(sayHello);
// numbers2.forEach(sayHello2All);

tmpName = {};

numbers2.forEach(sayHello2All3, tmpName); // {}
// thisArg? 通常是放入 this : 可以去取得該class 正確的‘層’ ; 通常是放在 bind
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/foreach

console.log(tmpName);

let reverseArray = [];

numbers.forEach( (value)=>{  reverseArray.unshift(value) }  );
console.log(reverseArray);


const bmi = (h,w) => { return w/(h*h);};
let h = [1.7,2,1.6,1.9];
let w = [60,75,67,80];
//console.log( "bmi:"+ bmi(h,w));
for(let i =0 ; i < h.length ;i ++)
    {
        console.log(i+": "+bmi(h[i],w[i]));
    }


//ES6 10 notes
//https://medium.com/@peterchang_82818/es6-10-features-javascript-developer-must-know-98b9782bef44
//https://webapplog.com/es6/

//1. Default Parameters
//ES6
let link  = function( objectPrice = 100, objectNumb = 1 , discount = 0) { return  objectPrice*objectNumb - discount; }
//ES5 style
let link_old = function (a,b,c)
{
    a = a || 100;
    b = b || 1 ;
    c = c || 0;
    return a*b -c;
}

console.log(link(200), link_old());

//2- Template Literals
let firstname = 'Galliano'
let lastname = 'John'
let hello = 'Hello,'+ firstname + " "+ lastname;
let hello2 = `Hello , ${ firstname }  ${ lastname }`;
let hello3 = `Hello: 客人${1+2+3} , 您選取的是 ${link_old()}`; //string // c的 printf , php , pyhton 也有
console.log(hello2, hello3); // ES6

let getHtmls = `
<header>
    <div class='banner'>
        <img src="img1.jpg>
    </div>
</header>

`;

// tagged template : 
//https://pjchender.blogspot.tw/2017/01/javascript-es6-template-literalstagged.html

//3 Multi-line Strings in ES6
//反引號 ; backticks （鍵盤左上角，數字1旁邊）代替 ‘ ，進行多行的字串輸入：
var roadPoem = 'Then took the other, as just as fair,\n\t'
    + 'And having perhaps the better claim\n\t'
    + 'Because it was grassy and wanted wear,\n\t'
    + 'Though as for that the passing there\n\t'
    + 'Had worn them really about the same,\n\t'

var fourAgreements = 'You have the right to be you.\n\
    You can only be you when you do your best.'

    var roadPoem2 = `
    Then took the other, as just as fair,
    And having perhaps the better claim
    Because it was grassy and wanted wear,
    Though as for that the passing there
    Had worn them really about the same, `;

console.log(roadPoem2);

//4.Destructuring Assignment
//


    //js performance ::  https://www.w3schools.com/js/js_performance.asp
    //go study :: http://es6.ruanyifeng.com/

    