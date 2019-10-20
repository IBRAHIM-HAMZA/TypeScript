import faker from 'faker';
export class Company {
  companyName: String;
  catchPhrase: String;
  location: {
    lat: Number;
    log: Number;
  };
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      log: parseFloat(faker.address.longitude())
    };
  }
}
export interface Make {
  printNull();
}
