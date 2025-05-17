class SmartPhone {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }
  charging() {
    console.log(`charging ${this.brand} ${this.model}`);
  }
}

class iOS extends SmartPhone {
  airDrop() {
    console.log(`iOS have a behavior AirDrop`);
  }
}
const ios = new iOS("Black", "Iphone", "13");

ios.charging();
ios.airDrop();
