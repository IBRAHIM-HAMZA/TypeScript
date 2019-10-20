import faker from 'faker';
export class User {
  name: String;
  location: {
    lat: Number; // خط العرض
    log: Number; // خط الطول
  };
  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      log: parseFloat(faker.address.longitude())
    };
  }
}
