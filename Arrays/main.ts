/**
 * Array ==>
 *
 *
 *
 *
 **/
// ==================== General Information About Arrays =====================
// مصفوفه مع تعريف نوع البيانات
const $carMarket = ['FORD', 'TOYOTA', 'BMW'];
// مصفوفه من نوع التاريخ
const $date = ['Date iS', new Date()];
// مصفوفه ذات اكثر من بعد مع تعريف نوع البيانات
const $colorCar = [
  ['RED', 'GREEN', 'BLACK'], // index ==> 1
  [1, 3, 4, 5, 6], // index ==> 2
  ['1', '3'] // index ==> 3
];
// ==> في حال اردت اعطاء نوعين مختلفين من البيانات لمصفوفه يجب ان تضع نواع البيانات داخل اقواس
const $number = ['1', 2];

// ==================== General Information About Arrays =====================
const $nameOfMember = ['HAMZA', 'ISMAIL', 'MOHAMED', 'FARAH'];
const $myName = $nameOfMember.map(
  // اضافه داله داخل الماب لتقوم بتبديل محتوي معين في المصفوفه
  ($nameOfMember: String): String => {
    return $nameOfMember.replace('HAMZA', 'IBRAHIM');
  }
);
//  اضافه امثله للماب للتمرن والفهم
// const $myName2 = $nameOfMember.map();
console.log($myName.toString());

// ==================== Tuples Arrays =====================
//قمنا بتعين متغير ثابت لوضع انواع البيانات المختلفه
type $Drink = [String, Boolean, Number];
// قمنا بوضع المتغير درنك كنوع بيانات للتابول
const $pepsi: $Drink = ['Brown 🥃', true, 40];
// عمل مصفوفه من النوع تابول و اعطائها نوع بيانات
const $coca: [String, Boolean, Number] = ['Brown+ 🥃', false, 50]; //لا يستطيع المستخدم تغير ترتيب العناصر
console.log();
