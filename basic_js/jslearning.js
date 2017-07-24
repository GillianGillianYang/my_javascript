//BASIC JAVASCRIPT

let  number1 =5;  // let  :  local  availible  // ES6 
     // old  :  var test =3  // global 
let number2 = 10;
let number3 ;

console.log(number1,number2,number1);
var numb1 = 000; // not good 
numb2 = 3; 
console.log(number3);  //undifinede
console.log(numb1);  // 0 

if( number3 ) // don't use 2 ==  //'30' == 30 ok
{
	console.log("hello"); // not print
}

 if (number1 == 5)  // not  good
{
	console.log(" ==  OK");
}

 if (number1 === 5)  //strict , 
{
	console.log(" ===  OK");
}

 if (number1 === '5')  //eror
{
	console.log(" === '' error");
}

console.info("test info");
console.error("test error ");
//console.trace(number1,number2 );

let a = '100'; //XOR //only number exange
let b =  '30';
a = a^b; 
b = a^b ;
a = a^b; 

console.log(a,b);

//ovewflow 
// =-
// */ 




//ES6 :: exchange  var 
[a,b] = [b,a];  // sugar , not array

console.log(a,b);


let number4 = 2;  //output  2^32  but less than  32 lines
// for //recursive  //math
number4 = number4 * number4 ; //2^2
number4 = number4 * number4 ; //2^4
number4 = number4 * number4 ; //2^8
number4 = number4 * number4 ; //2^16
number4 = number4 * number4 ; //2^32
console.log(number4);

number4=2;
for(let i = 0; i<3;i++){
 number4 += 1; 
}

console.log(number4);

//udefined , null -> false

let score =60;
if(score >=90 && score <=100){
	console.log("Ａ");
}else if(score >=80)
{
	console.log("B");
}
else
{
	console.log('X');
}


//error
/*
switch (score) 
{
	case  100..90:
		console.log('A');
	break;

	case 90..80:
			console.log('B');
	break;
	default:
	   console.log('WoW');
}
*/


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



let scores = [10,20,30,40,'apple',true,null,[1,2,3]]; //python scores[-1] 會從最後面娶回來
console.log(scores[4]);


//fasle and true :
//1. object -> true 
//2. ''  ==false
//3.  null, undefined == false
//4.   let a =0; a -> false

// && . &  ??
// 




