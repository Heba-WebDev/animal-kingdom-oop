class Animal {
  constructor(name, hasBones, bloodType) {
    this.name = name;
    this.hasBones = hasBones;
    this.bloodType = bloodType;
  }
}

class Arthropoda extends Animal {
  constructor(name) {
    super(name, false, "cold");
  }
}

class Fish extends Animal {
  constructor(name) {
    super(name, true, "cold");
  }
}

class Amphibia extends Animal {
  constructor(name) {
    super(name, true, "cold");
  }
}

class Reptiles extends Animal {
  constructor(name) {
    super(name, true, "cold");
  }
}

class AVES extends Animal {
  constructor(name) {
    super(name, true, "warm");
  }
}

class Mammals extends Animal {
  constructor(name) {
    super(name, true, "warm");
  }
}

const animal = new Mammals("Elephant");
console.log(animal);
