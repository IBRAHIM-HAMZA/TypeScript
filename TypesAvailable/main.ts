/**
 * Available Type ==>
 * Union ==>  القدرة على الجمع بين نوع أو نوعين مختلفين من البيانات
 *
 *
 *
 *
 **/

// +++++++++++++++++++++++++ Start Union ++++++++++++++++++++++++++
// Syntax:(type1|type2|type3|...|type-n)

let unionName: String | Number; // ==> هذا لمتغير يقبل نوعين من البيانات
unionName = 'Ibrahim';
unionName = 100;

let value: number | string; // ==> هذا لمتغير يقبل نوعين من البيانات
value = 190;
console.log('Numeric value of the value: ' + value);
value = 'Welcome to TypeScript!';
console.log('String value of the value: ' + value);

// Function Parameter as Union Type ==> داله تحتوي علي بارميترات مختلفه الانواع
function printInfo(nameAndId: String | Number): void {
  if (typeof nameAndId === 'string') {
    console.log(nameAndId + ' ' + '😈');
  }
  if (typeof nameAndId === 'number') {
    console.log('ID' + '' + nameAndId + ' 😻 ');
  }
  // return name.toString() + id.toString();
}
printInfo('Fenex'); // ==> تستطيع تمرير بارميترات نصيه
printInfo(138 - 928323.24); // ==> تستطيع تمرير بارميترات رقميه
// Global Element
var globalElement = document.getElementById('type-available');
var space: String = '.......';
// Style
// globalElement.style.width = '200px';
globalElement.style.border = '2px solid #1abc9c';
globalElement.style.color = '#1abc9c';
globalElement.style.padding = '20px';
globalElement.style.margin = '50px auto';
globalElement.style.textAlign = 'center';
globalElement.style.fontSize = '50px';

// Array as Union Type ==> مصفوفه تحتوي علي اكثر من نوع

let arr: String[] | Number[];
arr = ['🤖', '😻', '🐱', '🐶', '🐝'];
for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
  globalElement.innerHTML = arr[0].toString();
}
arr = [1, 2, 3, 4, 5, 6, 7];
for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}

// +++++++++++++++++++++++++ End Union ++++++++++++++++++++++++++
