class Person {
  name;
  code;
  phrase;
  eat;

  constructor(name = "Sin nombre", code = "Sin code", phrase = "Sin phrase") {
    this.name = name;
    this.code = code;
    this.phrase = phrase;
  }

  set setEatFavorite(eat) {
    this.eat = eat;
  }

  get getEatFavorite(){
    return this.eat;
  }

  whoIam() {
    console.log(`Soy ${this.name} y mi identidad es ${this.code}`);
  }

  myPhrase() {
    console.log(`${this.code} dice: ${this.phrase}`);
  }
}

const spiderMan = new Person(
  "Piter parker",
  "SpiderMan",
  "Tu buen vecino el hombre araña"
);

console.log(spiderMan);
spiderMan.whoIam();
spiderMan.myPhrase();
spiderMan.setEatFavorite = "El pie de cereza de la tia may";
console.log(spiderMan.getEatFavorite);
