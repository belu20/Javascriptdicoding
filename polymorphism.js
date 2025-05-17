class SmartPhone {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }

  charging() {
    console.log(`Charging ${this.model}`);
  }
}

class Android extends SmartPhone {
  //Overriding constructor
  constructor(color, brand, model, device) {
    super(color, brand, model);
    this.device = device;
  }

  charging() {
    //overriding method
    //call method charging dari supeClass (smartphone)
    super.charging();
    console.log(`charging ${this.model} with fast charging`);
  }

  splitscreen() {
    console.log("android have a behavier splitscreen");
  }
}

const android = new Android("black", "b", "redmi 9t", "Smart TV");

android.splitscreen();
android.charging();
