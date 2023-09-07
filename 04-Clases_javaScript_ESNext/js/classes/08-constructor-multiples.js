class Person {

    static objectToPerson({name, lastName, age}){
        return new Person(name, lastName, age);
    }

    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    info(){
        console.log(`Info: ${this.name}, ${this.lastName}, ${this.age}`);
    }
}

const name = 'Katerine',
      lastName = 'Turner',
      age = 40;

const kate = new Person(name, lastName, age);
kate.info();

const emer = {
    name: 'Emerson',
    lastName: 'Ralph',
    age:40
}

const ralph = new Person(emer.name, emer.lastName, emer.age);
ralph.info();

const royal = {
    name: 'Emerson',
    lastName: 'Royal',
    age:40
}

const automatizado = Person.objectToPerson(royal);
automatizado.info();