function createUser(firstName, lastName, age){
    const user ={
        firstName,
        lastName,
        age,
        getAgeYear(){
            return new Date().getFullYear() - UserActivation.age
        },
    }
    return user
}

const user1 = createUser('Manila', 'Chhabra', 30)
const user2 = createUser('Myra', 'Lakhani', 3)
/////////////////////////

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      const date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
  const myCar = new Car("Skoda", 2016);
  const car = {type:"Fiat", model:"top", color:"Silver"};

  /////////////////////////////

  //Inheritance
  class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  let myCar1 = new Model("Slavia", "Kushaq");

