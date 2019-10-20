/**
 * 🌚🌝🌸☘️🌹🌺🧀🐢🐤🦋🦄🐴🙈🙉🙊🌲🎋
 * 🌛🌞🌧🌤⛅️❄️💦👧🏾🙃😋😍🙂🧐🤩🥳☠️🤡🤯
 * Type Annotation In Function ==> هو اعطاء البارميترات نوع بيانات
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 **/

// +++++++++++++++++++++ Start Type Annotation WITH fUNCTION +++++++++++++++++++++++++++++
// Type Annotation In Function ==> هو اعطاء البارميترات نوع بيانات
// const addNumber = (a: Number, b: Number): Number => {
//   return a + b;
// };
// const subtract = (x: Number, y: Number): void => {
//   x - y;
// };

// let divide = function(m: Number, n: Number): Number {
//   return m / n;
// };
// function multiply(e: Number, v: Number): Number {
//   return e * v;
// }

// // Void ==> هذالداله لا ترجع قيمه
// const voidFunction = (name: String): void => {
//   console.log(name);
// };
// // Never  ==> لا ترجع اي قيمه
// let erroR = (message): never => {
//   throw new Error(message);
// };

// +++++++++++++++++++++ END Type Annotation WITH fUNCTION +++++++++++++++++++++++++++++

// +++++++++++++++++++++ Start Type Annotation WITH  fUNCTION+++++++++++++++++++++++++++++
// DISTRACTION ==> الهاء  Annotation ==> الحاشيه
// todayWeathe: { date: Date; wether: String } ==> طريقه لكتابه الدستراكشرنج
//{date, weather}: { date: Date; wether: String } ==>  طريقه اخري لكتابه الدستراكشرنج
const todayWeathe = {
  date: new Date(), // DISTRCRION
  wether: 'sunny 🌞'
};
const printInfo = (todayWeathe: { date: Date; wether: String }): void => {
  console.log(todayWeathe.date);
  console.log(todayWeathe.wether);
};

printInfo(todayWeathe);

// +++++++++++++++++++++ End Type Annotation WITH fUNCTION +++++++++++++++++++++++++++++
