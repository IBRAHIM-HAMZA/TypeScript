/**
 * Iterfaces & Object
 *
 *
 *
 *
 *
 *
 *
 *
 **/

// ========================== Object ===============================
// عمل اوبجكت وتمريره لداله
const oldCivic = {
  name: 'Ombadda',
  year: 2000,
  broken: true
};

//  عمل داله وتمرير لاوبجكت كبارميتر
const printVehicle = (vehicle: {
  name: String;
  year: Number;
  broken: Boolean;
}): void => {
  console.log(`Name : is 🏭 ${vehicle.name}`);
  console.log(`Year : is 🎇 ${vehicle.year}`);
  console.log(`Broken : is 🧱 ${vehicle.broken}`);
};
// تمرير الاوبجكت للداله
printVehicle(oldCivic);

// ========================== Interfaces ===============================
// عمل انترفيس ووضع نوع للبيانات اي الكي
interface Vehicle {
  name: String;
  speed: String;
  model: Number;
  date: Date;
  //   summry(): String;
}
// عمل اوبجكت يحتوي علي البيانات
const car = {
  name: 'Benz',
  speed: '280k/h',
  model: 2020,
  date: new Date()
  //   summry(): string {
  //     return `NAME IS ${this.name}`;
  //   }
};
// عمل داله لوضع لانترفيس كنوع بيانات دخل البارميتر
const printCarInfo = (info: Vehicle): void => {
  console.log(`Name : is 🏎 ${info.name}`);
  console.log(`Speed : is 🌞 ${info.speed}`);
  console.log(`Model : is 🎉 ${info.model}`);
  console.log(`Date : is 🕓 ${info.date}`);
};
// استداعاء الداله وتمرير الاوبجكت لها لطباعه بيانات الاوبجكت
printCarInfo(car);

// ========================== Function In Interfaces ===============================
// interface Animal {
//   name: String;
//   height: Number | String;
//   printInfoAnimal(): String;

// }

// class Dogg implements Animal {
//   name: 'Dogg';
//   height: '22kg';
//   printInfoAnimal(): String {
//     return `Animal Dogg : ${this.name} ${this.height}`;
//   }
// }
// let dogg: Dogg = new Dogg();
// console.log(dogg.printInfoAnimal());
