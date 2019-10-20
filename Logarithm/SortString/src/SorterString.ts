// // عمل ترتيب للارقام
// class SorterString {
//   // عمل كونستراكتور وداخله مصفوفه من لارقام
//   constructor(public collection: number[] | string) {}
//   // عمل داله تقوم بترتيب الاقام عند استدعائها
//   sort(): void {
//     const { length } = this.collection;
//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length - i - 1; j++) {
//         // اي انا الجافا فهمت انا العنصر كولكشن نوعه مصفوفه
//         // Guard ==> هنا استخدمنا الجارد للحصول علي جميع خصائص المصفوفه
//         if (this.collection instanceof Array) {
//           if (this.collection[j] < this.collection[j + 1]) {
//             const leftHand = this.collection[j];
//             this.collection[j] = this.collection[j + 1];
//             this.collection[j + 1] = leftHand;
//           }
//           // اذا الكولكشن لديه سترنج يعمل
//           if (typeof this.collection === 'string') {
//           }
//         }
//       }
//     }
//   }
//   /**
//    * ==> TODO:==> في حاله النصوص اذا استخدمنا نص واردنا تغير حرف عن طريق المصفوفه لايمكننا فعل ذلك
//    * var nameFenex = 'HAMZA';
//    * nameFenex[0] = 'x'; // Error
//    * 'x'.charCodeAt(0); // اي حرف في الجافا لديه كود اي رقم تستطيع معرفه الرقم من خلال الداله شار كود ات
//    * console.log('ك'.charCodeAt(0));
//    * ######################### لاتحاد ###########################
//    *	==> با النسبه للا تحاد طريقه عمله ان الدوال والخصائص بين العناصر المتحده لا تظهر كلها فقط المشتركه بينهم
//    **/
// }
