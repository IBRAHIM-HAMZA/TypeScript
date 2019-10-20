// // عمل ترتيب للارقام
// class SorterNumber {
//   // عمل كونستراكتور وداخله مصفوفه من لارقام
//   constructor(public collection: number[]) {}
//   // عمل داله تقوم بترتيب الاقام عند استدعائها
//   sort(): void {
//     //
//     const { length } = this.collection;
//     //
//     for (let i = 0; i < length; i++) {
//       //
//       for (let j = 0; j < length - i - 1; j++) {
//         // [j] ==> يمثل العنصر الشمالي  And [j + 1] ==> يمثل العنصر اليمين
//         if (this.collection[j] < this.collection[j + 1]) {
//           // نقوم بعمل تبديل اذا كان العنصر الشمالي اكبر من اليمين
//           const leftHand = this.collection[j];
//           // نقوم باخذ العنصر من اليمن الي الشمال
//           this.collection[j] = this.collection[j + 1];
//           // نقوم بتحويل جميع العناصر من الشمال لليمين
//           this.collection[j + 1] = leftHand;
//         }
//       }
//     }
//   }
// }

// const sorter = new SorterNumber([-2, -1, 3, 4 - 5, 6, -7, -1]);
// sorter.sort();
// console.log(sorter.collection);
