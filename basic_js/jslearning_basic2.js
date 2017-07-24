
/*
switch(new Date().getDay()){
  case 0 :
  	console.log('Sunday');
  	break;
  case 1 :
  	console.log('Monday');
  	break;
  case 4 :
  	console.log('Thursday');
  	break;
  	default:
  	console.log('WHAT??');
}
*/


let counculator = function(a,b) { return a+b;};
let scores = [10,20,30,40,'apple',true,null,[1,2,3],counculator,counculator(100,200)]; //python scores[-1] 會從最後面娶回來

counculator = function(a,b) { return 10000;}; //不會影響上面的scores 陣列值
console.log(scores,scores.length);
console.log(scores[7]);
console.log(scores[7][1]);
scores.push('tina','Gina','lily');
console.log(scores.length);

let smallgroup =  scores.slice(0,2); // from 0, get 2 items
console.log(smallgroup);


var counculator2 = function(a,b) { return a+b;};
var scores2 = [10,20,30,40,'apple',true,null,[1,2,3],counculator,counculator2(100,200)]; //python scores[-1] 會從最後面娶回來
counculator2 = function(a,b) { return 10000;}; 
console.log(scores2[scores2.length-1]); //still 300 !!! 


let c01  = function (){
	let user01 = 'tom'
	function tellyouname(){
		console.log('Hi,'+user01);
	}
return tellyouname;
}()();

//c01()();

let namelist = ['a','b','c','d'];
namelist.pop() //moved 'd'
console.log( namelist);
namelist.shift()
console.log(namelist); //moved 'a'

let customerData = {'name' :'gina', 'age':30,'blood':'O' } ; //json
console.log(customerData['age']);
//array swift 的closure sort  排序法

//fasle and true :
//1. object -> true 
//2. ''  ==false
//3.  null, undefined == false
//4.   let a =0; a -> false

// && . &  ??
// 


for(let i= 0;i< namelist.length;i++)
{
  console.log(namelist[i]);
}

let j=0
for(;j<3;)
{
	console.log(j);
	j++;
}

for(let item of namelist)
{
	console.log(item);
}

// ? java ? swift


//let, var ,const 
// http://rocksaying.tw/archives/2015/ES6_var,let,const.html

// var ->  funtional scope
{
    var i = 0;
    {
        var i = 1;  //second var i :  ignore declartion //second let i -> ignore 
        console.log("inner block: ", i); //1
    }
    console.log("host block: %d", i); // 1
}

{
    let i = 0;
    {
        let i = 1;
        console.log("2inner block: ", i); //1
    }
    console.log("2host block: %d", i); // 0
}

function func(ar)
{
   for(var i =0 ; i<2;i++)
   {
	   //for(var i =0; i<3;i++) // var i -> function scope -> bug
	   //before ES6; 2 type scope -> global scope, functional scope 
	   for(var j =0; j<3;j++)
	   {
		   console.log(i,j);
		   if(namelist[j] === 'b'){
			console.log('we get b');
			break;
		   }
	   }
   }

};
func();


function func2(ar)
{
   for(let j =0 ; j<2;j++)
   {
	   for(let j =0; j<3;j++) //ok , let -> block as scope
	   {
		   console.log(i,j);
		   if(namelist[j] === 'b'){
			console.log('we get b');
			break;
		   }
	   }
   }

};

func2();
//let :
//1. 禁止在相同活動範圍重復宣告
//2.let 禁止在宣告變數前就使用它
//3.全域範圍中以let宣告的變數, 不會成為global object（全御個體）的屬性 , var 則會是痊癒個體的屬性;let 是真正的區域變數
//所以用module或其他方式載入的程式碼看不到那些let變數 ; 瀏覽器的痊癒個體為 window

//const 同上用法 , 可設定為一函數回傳值或運算或變數,但只設一次

let numbers = [3,13,44,55,33, 100,-20];
let max = Number.MIN_VALUE ; // numbers[0];
let min = Number.MAX_VALUE ;//numbers[0];
let posotive =[];
for(let num of numbers)
{
	if(max < num){max = num ;}
	if(min > num){min = num ;}
	if(num >= 0){posotive.push(num);}

}
console.log("max and min:",max,min);

let a = function(){return 5} ;
const START_X = a();

console.log(START_X); //OK

console.log(numbers.reverse());

//ES6 10 notes
//https://medium.com/@peterchang_82818/es6-10-features-javascript-developer-must-know-98b9782bef44






