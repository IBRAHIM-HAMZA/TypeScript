/**
 * 		Variable In TypeScript
 *  Annotation ==>
 *  let [identifier] : [type-annotion] = [value]
 *   ==> يتم الإعلان عن كل متغير بنوع بياناته. هذه هي تعليقات توضيحية. لا يمكنك تغيير القيمة باستخدام نوع بيانات مختلف بخلاف نوع البيانات المعلنة للمتغر
 *
 * 	Tuple ==> هو تعريف متغير واعطائه اكثر من نوع بيانات
 * 	==> Tuble ==> let nameOfVariable : [type-annotionString, type-annotionNumber] = [valeString, valueNumber]
 * 	String
 * 	Number
 * 	Undefined
 * 	Null
 * 	Void
 * 	Symbol
 * 	Array
 * 	Class
 * 	Object
 *	Any ==>
 *
 *
 *
 **/

//  هنا قمنا بتطبيق النوتيشن مع المتغيرات
let x: String = 'Aisha';
let y: String | Boolean = 'True';
//  هنا قمنا بتطبيق النوتيشن مع المصفوفات
let arryName: String[] = ['AHMED', 'CODESH', 'FENEX'];
let arryScore: Number[] = [234, 24, 224, 2544];
let arryBoolean: Boolean[] = [true, false, false];
// +++++++++++++++++++++ Start Tuple +++++++++++++++++++++++++
// Tuple Variable
let tubleVariable: [String, Number] = ['IBRAHIM', 100];
// Tuple Array
let tubleArray: [String, Number][];
tubleArray = [['BMW 🌺 ', 1], ['JEEB 🌸 ', 2]];
// ا	ضافه عناصر للمصفوفه
// tubleArray.push()
console.log(tubleArray[0]);
// +++++++++++++++++++++ End Tuple +++++++++++++++++++++++++

// Global Element
const globalElement = document.getElementById('var');
const space: String = '.......';
// Style
// globalElement.style.width = '200px';
globalElement.style.border = '2px sold #e67e22';
globalElement.style.color = 'white';
globalElement.style.padding = '20px';
globalElement.style.margin = '50px auto';
globalElement.style.textAlign = 'center';
// PrintInBrowser
globalElement.innerHTML = `${x} Is ${y}
	${space} arryName ${arryName}
	${space}arryScore ${arryScore}
	${space}arryBoolean ${arryBoolean}
	`;
// +++++++++++++++++++++ Start Object +++++++++++++++++++++++++
// Literal Object ==> تقوم بتعين نوع بيانات للكائن

let num: { number1: Number; number2: Number } = {
  number1: 2991,
  number2: 7130
};
// +++++++++++++++++++++ End Object +++++++++++++++++++++++++
// +++++++++++++++++++++ Start Type Annotation ++++++++++++++
// Type Annotation Function
let myNumber: (i: String) => void = (i: String) => {
  console.log(i);
};

// +++++++++++++++++++++ End Type Annotation +++++++++++++++++++++++++

// +++++++++++++++++++++ Start any Type  Annotation ++++++++++++++++++++++
// Any Type ==> تقوم بتعين اي نوع بيانات و تستخدم الداله جوسن ضوط بارس لاستخراج القيمه
// JOSON.pars(return any) ==> تقوم باعطائها سترنج ترجع قيمه
const anyType = '{"🥳" : 10 , "👧🏾" : 700}'; // String and Number
const bool = '{"Boolean" : "false"}'; // Objet
const numb = '4'; // Number
const coordi = JSON.parse(anyType);
console.log(coordi);

// ==> عمل متغير ويعين قيمه له لاحقا

let color: String[] = ['RED', 'BLUE', 'BLACK'];
let check: Boolean; // عمل متغير ويعين قيمه له لاحقا
for (let i = 0; i < color.length; i++) {
  if (color[i] === 'BLUE') {
    check = true;
    console.log(check + ' 🤩 ');
  }
}

//  ==> عمل متغير لديه اكثر من نوع بيانات و استخراج الرقم الصحيح
let arraNumber = [-10, -5, 9];
let numberAboveBoolean: Boolean | Number = false;
for (let i = 0; i < arraNumber.length; i++) {
  if (arraNumber[i] > 0) {
    numberAboveBoolean = arraNumber[i];
    console.log(numberAboveBoolean + ' 🦋 ');
  }
}

// +++++++++++++++++++++ End any Type Annotation +++++++++++++++++++++++++

// 🌚🌝🌸☘️🌹🌺🧀🐢🐤🦋🦄🐴🙈🙉🙊🌲🎋🌛🌞🌧🌤⛅️❄️💦👧🏾🙃😋😍🙂🧐🤩🥳☠️🤡🤯
