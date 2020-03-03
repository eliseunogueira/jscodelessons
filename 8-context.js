let john = {
  firstName: 'John',
  lastName: 'Doe',
  driveCar() {
    console.log(`${this.firstName} ${this.lastName} is driving a car.`);
  }
};
john.driveCar();
function breathe() {
  console.log(`${this.firstName} ${this.lastName} just inhaled and exhaled`);
}
breathe.call(john);
