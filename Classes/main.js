/**
 *
 *
 */
// ==> انشاء كلاس داخله دوال ومتغيرات برايفت
class Car {
    constructor(sir) {
        this.sir = sir;
        this.speed = '290k/h';
        this.name = 'BMW';
    }
    printInfoCar() {
        console.log((this.name = this.name));
        console.log((this.speed = this.speed));
    }
    in() {
        // ==> هذه الداله تقوم بارجاع الدوال والمتغيرات المعرفه كبرايفت
        return this.printInfoCar();
    }
}
// -----------------------------------Full Exemple---------------------------------
class City {
    constructor(nameOfCity, nameOfCountry, population) {
        this.nameOfCity = nameOfCity;
        this.nameOfCountry = nameOfCountry;
        this.population = population;
    }
    printCity() {
        console.log(`
		City : ${this.nameOfCity}
		Country : ${this.nameOfCountry}
		Populations : ${this.population}
	`);
    }
    setPopulation(population) {
        this.population = population;
    }
    getPopulation() {
        return this.population;
    }
}
let city = new City('OMDURMAN', 'SOUDAN', 324349324249);
city.printCity();
const HTML = `
	<style>
		h1 {
			color : red;
			// margin : 500px 500px 0;
			display: block;
		}
	</style>
	<div id = 'print'>
	<h1>
		${city.nameOfCity}
		${city.nameOfCountry}
		${city.population}
	<h1>
	</div>
`;
document.body.innerHTML = HTML;
// -----------------------------------Full Exemple ---------------------------------
class Player {
    constructor(firstName, lastName, position, State, Highschool) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.State = State;
        this.Highschool = Highschool;
    }
    printPlayer() {
        console.log(`
	First Name  ==> ${this.firstName}
	Last Name   ==> ${this.lastName}
	Position    ==> ${this.position}
	State       ==> ${this.State}
	High School ==> ${this.Highschool}
	`);
    }
}
const player = new Player('FENEX', 'LONAC', 'Right Tackle', 'OMDURMAN', 'ALJAZEERA');
player.printPlayer();
