/**
 *
 *
 */
// ==> انشاء كلاس داخله دوال ومتغيرات برايفت
class Car {
  private speed: string = '290k/h';
  private name: string = 'BMW';
  constructor(public sir: string) {}
  private printInfoCar(): void {
    console.log((this.name = this.name));
    console.log((this.speed = this.speed));
  }
  public in() {
    // ==> هذه الداله تقوم بارجاع الدوال والمتغيرات المعرفه كبرايفت
    return this.printInfoCar();
  }
}
// -----------------------------------Full Exemple---------------------------------
class City {
  nameOfCity: string;
  nameOfCountry: string;
  population: number | number;
  constructor(
    nameOfCity: string,
    nameOfCountry: string,
    population: number | number
  ) {
    this.nameOfCity = nameOfCity;
    this.nameOfCountry = nameOfCountry;
    this.population = population;
  }
  printCity(): void {
    console.log(`
		City : ${this.nameOfCity}
		Country : ${this.nameOfCountry}
		Populations : ${this.population}
	`);
  }
  public setPopulation(population: number) {
    this.population = population;
  }
  public getPopulation() {
    return this.population;
  }
}

let city = new City('OMDURMAN', 'SOUDAN', 324349324249);
city.printCity();

const HTML: string = `
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
  firstName: string;
  lastName: string;
  position: string;
  State: string;
  Highschool: string;

  constructor(
    firstName: string,
    lastName: string,
    position: string,
    State: string,
    Highschool: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.State = State;
    this.Highschool = Highschool;
  }

  printPlayer(): void {
    console.log(`
	First Name  ==> ${this.firstName}
	Last Name   ==> ${this.lastName}
	Position    ==> ${this.position}
	State       ==> ${this.State}
	High School ==> ${this.Highschool}
	`);
  }
}
const player = new Player(
  'FENEX',
  'LONAC',
  'Right Tackle',
  'OMDURMAN',
  'ALJAZEERA'
);

player.printPlayer();
