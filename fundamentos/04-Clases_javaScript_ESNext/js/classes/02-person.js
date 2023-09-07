class Person {
  name;
  code;
  slogan;

  constructor(name = "Sin nombre", code = "Sin code", sloga = "Sin slogan") {
    this.name = name;
    this.code = code;
    this.sloga = sloga;
  }

  whoIam() {
    console.log(`Soy ${this.name} y mi identidad es ${this.code}`);
  }

  getSlogan() {
    this.whoIam();
    console.log(`${this.code} dice: ${this.slogan}`);
  }
}

const defaultPerson = new Person();
const spiderMan = new Person(
  "Piter parker",
  "SpiderMan",
  "Tu buen vecino el hombre araña"
);
const iroMan = new Person("Tony stark", "Iroman", "");

console.log({ defaultPerson, spiderMan, iroMan });

defaultPerson.whoIam();
spiderMan.whoIam();
spiderMan.getSlogan();
iroMan.whoIam();
iroMan.getSlogan();
