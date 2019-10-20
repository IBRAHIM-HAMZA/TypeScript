// Annotation Object ==> اعطاء نوع بيانات للعناصر داخل الاوبجكت

const Per = {
  name: 'HAMZA',
  age: 20,
  coords: {
    // كائن داخلي يحتوي علي عناصر
    tele: '09',
    lan: '190'
  },
  setAge(age: Number): void {
    // داله نقوم من خلالها تغير العمر
    this.age = age;
  },
  getAge(): Number {
    return age;
  }
};
// نوع بيانات الخصائص			خصائص
const { age, name }: { age: Number; name: String } = Per;
const {
  coords: { tele, lan }
}: { coords: { tele: String; lan: String } } = Per;

console.log(Per.getAge());

const profile = {
  fullName: 'IBRAHIM HAMZA',
  fullAge: 20,
  add: '66 RUE DE SOUDAN',
  contact: {
    telephone: 092313139,
    email: 'MR.XE.MAN@MAIL.RU'
  },

  setFullAge(fullAge: Number): void {
    this.fullAge = fullAge;
  }
};

const {
  fullAge,
  fullName,
  add
}: { fullAge: Number; fullName: String; add: String } = profile;
const {
  contact: { telephone, email }
}: { contact: { telephone: Number; email: String } } = profile;

console.table(profile);
