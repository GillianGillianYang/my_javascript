//ES6 10 notes
//https://medium.com/@peterchang_82818/es6-10-features-javascript-developer-must-know-98b9782bef44
//https://webapplog.com/es6/

let array = [1, 3, 6];
var maps = array.map(function(number) { return `<div> ${number} </div>`; });
console.log(maps);



//1. Default Parameters
//ES6
let link = function(objectPrice = 100, objectNumb = 1, discount = 0) { return objectPrice * objectNumb - discount; }
    //ES5 style
let link_old = function(a, b, c) {
    a = a || 100;
    b = b || 1;
    c = c || 0;
    return a * b - c;
}

console.log(link(200), link_old());

//2- Template Literals
let firstname = 'Galliano'
let lastname = 'John'
let hello = 'Hello,' + firstname + " " + lastname;
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
var roadPoem = 'Then took the other, as just as fair,\n\t' +
    'And having perhaps the better claim\n\t' +
    'Because it was grassy and wanted wear,\n\t' +
    'Though as for that the passing there\n\t' +
    'Had worn them really about the same,\n\t'

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