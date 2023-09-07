//Obect literal
const person = {
  name: "Emer",
  age: 25,
  print() {
    console.log(`Name: ${this.name} - edad: ${this.age}`);
  },
};

person.print();

//Stand before the ES6
//Esto se debe crear con la palabra new
function Client(name, age) {
  console.log("Entrando a la clase cliente");
  this.name = name;
  this.age = age;

  this.print = function () {
    console.log(`Name: ${this.name} - edad: ${this.age}`);
  };
}

const acierto = new Client('Acieto', 5);
acierto.print();

const asus = new Client('Asus', 10);
asus.print();
