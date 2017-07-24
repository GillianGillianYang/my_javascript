let getUser  = function(v1= 10,v2=11){ return 42;} // 匿名函示
//es6 arrow function 
let gerUser2 = (v1,v2)=> {return 42;};

console.log(getUser());

//array foreach
const print = (item,index ,array) => {
    console.log(item,index,array);
}

let numbers1 = ['a','b','c'];
numbers1.forEach(print); // function name

const link  = function( objectPrice = 100, objectNumb = 1 , discount = 0) { return  objectPrice*objectNumb - discount; }


// Template Literals  && tagged literals
//https://pjchender.blogspot.tw/2017/01/javascript-es6-template-literalstagged.html
//模版字符串（template literal）
let firstname = 'Galliano'
let lastname = 'John'
let country = 'Paris'
let hello1 = 'Hello,'+ firstname + " "+ lastname;
let hello2 = `Hello , ${ firstname }  ${ lastname }`;
let hello3 = `Hello: 客人${1+2+3} , 您選取的是 ${link()}`; //string // c的 printf , php , pyhton 也有
console.log(hello2, hello3); // ES6


//標籤模版（tagged template）
//非常適合用在前端用來過濾使用者所輸入的訊息
//tag `<p> My name is ${myName} and my coutry is ${myCountry}</p>`;
// tag(["<p> My name is ", " and my coutry is ", "</p>"], "PJCHENder", "Taiwan")  // 等同於上面這一段


tag `<p> I\'m ${firstname}, lives in ${country}  </p>`; //the same as the following line
tag(["<p> I\'m " ,", lives in " ," </p>"],firstname,country);

function tag (template){
    console.log(template);
   // console.log(arguments); 
}
function fun1 (v1){
    console.log(arguments);
}
//js concate （不知道有沒有做優化）  , vs  java string buffer  (可以改變本來的字串)


//arguments js 的保留式
//https://pjchender.blogspot.tw/2016/04/javascriptparameterargumentsspread.html

//String : char array
let hello = 'Hi,Gillian';
hello[10] = 'G'; // will not change---- could not change your 'string' 
console.log(hello[0], hello[1], hello[10]);

// substr ; substring
console.log(` (1,3): ${hello.substr(1,3)}` );           
console.log(` (1): ${hello.substr(1)}` );               //since 1 ~
console.log(` (-3): ${hello.substr(-3)}` );             // since -3 ~
console.log(` (-3,2): ${hello.substr(-3,2)}` );
console.log(` (20,2): ${hello.substr(20,2)}` );         
console.log(` (-20,2): ${hello.substr(-20,2)}` );       //負超過 , since 0

console.log(` substring(3,5): ${hello.substring(3,5)}` ); // 3~4 (<5) 閉鎖性  //substring -> 印出區間的字串 （5,9) -> 第五個到第九個

//replace() : 只會替換掉一次～ 要全換要多換幾次 ;  會產生新的字串 不會變更到舊的
let newReplace = hello.replace('hi','hello');
console.log(`replace():  ${ hello.replace('hi','hello') }`);  //return itself
console.log(`new :${newReplace} , ori: ${hello}`); // will not change the original string 

//replace 第一個參數可以用正規表示法
//https://blog.longwin.com.tw/2007/08/javascript_match_replace_method_2007/
//https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Regular_Expressions

let words1 = ['The','fox','jumps','over','dog'];
let words2 = ['quick','brown'];
let word1 = 'the';
let word2 = 'lazy';

console.log(words1[0] ,words2[0],  words2[1] , words1[1], words1[2], words1[3], word1 ,word2 ,words1[4] )   ;



//Object :: 物件 與 json (javascript object notation)
//在js 中 ,除了基本型態 都是 object  
// function 是特別的object , array 也是 object
//key- value pair ; 所以不要亂用 user1[0]
// json 是種 object 的表示法

let user01 = {
    name: 'Gillian',
    age : 17,
    phone : '0922222222',
    'this is a key': 'value',
    1 :'value1' ,
    '1': 'stringvalue1',
    2 :'value2'
}
//建議沒必要別把key括號起來
console.log(user01);
console.log(user01['age']);
console.log(user01.name);
console.log(user01['this is a key']); // 有空白或數字開頭, 要用[]
console.log(user01[1]); // stringvalue1  
console.log(user01[2]); // value2
console.log(user01[3]); // undefined
console.log(user01['2']); // value2


//object 可以有 object , array 中可以有 array
let user02 = {
    name : 'Gina',
    age :'19'
} //符合josn 表示法的物件
let user2Str = '{"name":"Gina","age":19 }' ; // 符合json 格式的字串
let pets = [{name:'kiki',type:'fatcat'},{name:'pi~~~',type:'cutecat'}];
user01.pets = pets;
user01['friend'] = user02;
console.log(user01);
console.log(user2Str);

let user2stringObject = JSON.parse(user2Str);
console.log(user2stringObject.name);
let user2ObjectStr = JSON.stringify(user02);
console.log(user2ObjectStr);

//geoCodeing api 反查 
//https://developers.google.com/maps/documentation/geocoding/intro?hl=zh-tw
//https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY
//https://maps.googleapis.com/maps/api/geocode/json?address=台灣大學

//google webAPI 
//https://developers.google.com/maps/web-services/overview?hl=zh-tw#ParsingJSON



//continute : array 操作 
//https://wcc723.github.io/javascript/2017/06/29/es6-native-array




// enter terminal ,  變數按下 tab 會列出可用的funciotn , leave controlC *2 
 


