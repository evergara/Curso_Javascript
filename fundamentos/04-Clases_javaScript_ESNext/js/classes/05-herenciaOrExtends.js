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
  
 class Heroe extends Person {
    clan;

    constructor(clan = 'Sin clan', name, code, phrase){
     super(name, code, phrase);
     this.clan = clan;
    }

    whoIam(){
        super.whoIam();
        console.log(`Soy ${this.name} y mi clan es ${this.clan}`);
    }

 }

  const spiderMan = new Heroe('Los Avengers',
    "Piter parker",
    "SpiderMan",
    "Tu buen vecino el hombre araña"
  );
  
  spiderMan.whoIam()

console.log(spiderMan);