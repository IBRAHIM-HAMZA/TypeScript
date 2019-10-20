// Annotation Object ==> اعطاء نوع بيانات للعناصر داخل الاوبجكت
const Per = {
    name: 'HAMZA',
    age: 20,
    coords: {
        // كائن داخلي يحتوي علي عناصر
        tele: '09',
        lan: '190'
    },
    setAge(age) {
        // داله نقوم من خلالها تغير العمر
        this.age = age;
    },
    getAge() {
        return age;
    }
};
// نوع بيانات الخصائص			خصائص
const { age, name } = Per;
const { coords: { tele, lan } } = Per;
console.log(Per.getAge());
const profile = {
    fullName: 'IBRAHIM HAMZA',
    fullAge: 20,
    add: '66 RUE DE SOUDAN',
    contact: {
        telephone: 092313139,
        email: 'MR.XE.MAN@MAIL.RU'
    },
    setFullAge(fullAge) {
        this.fullAge = fullAge;
    }
};
const { fullAge, fullName, add } = profile;
const { contact: { telephone, email } } = profile;
console.table(profile);
