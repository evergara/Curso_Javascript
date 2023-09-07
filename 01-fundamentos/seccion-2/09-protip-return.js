// Return literal object
function createPerson(name, lastnane){
    return {
        name: name,
        lastnane: lastnane
    }
}

const person = createPerson('Elvia', 'O');
console.log(person);
//Esto genera un undefine porque detemina que no retorna nada
//const createdPerson = (name, lastnane) => {name, lastnane};

const createdPerson = (name, lastnane) => ({name, lastnane});

console.log(createdPerson('Herne', 'C'));

/// Manejo de arguments

function imprimirArgumrnst(){
    console.log( arguments);
}

imprimirArgumrnst(10, true, false, 'Evergara', 'Hola');
/**
 * Esto genera un error porque las arrow function 
 * no manejan el arguments
 
const  arguments = ()  => {
    console.log( arguments);
}

 */

//Argument operation 
//Despues de ...arg no puede ir mas argumento
const  imprimirArguments = (...arg)  => {
    console.log( arg);
}

imprimirArguments(10, true, false, 'Evergara', 'Hola');

const  imprimirAfterArguments = (name, ...arg)  => {
    console.log({name, arg});
}

imprimirAfterArguments('Evergara', 10, true, false, 'Hola');

//Destructuring return Array

const  imprimirAfterDestuctArguments = (name, ...arg)  => {
    console.log({name, arg});
    return arg;
}

const [edad, casado, vivo, saludo] = imprimirAfterDestuctArguments('Evergara', 10, false, true, 'Hola');
console.log('Destructuring:: ', { edad, casado, vivo, saludo})

//Destructuring return object
const createdPerson2 = (name, lastnane) => {
    return {name, lastnane}
};

const {lastnane: apellido } = createdPerson2('Herne', 'C');
console.log({apellido})

//Destructuring Arguments 

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster']
};

const imprimePropiedades = (personaje) => {
    console.log(personaje);
};

imprimePropiedades(tony);

const imprimePropiedades2 = (personaje) => {
    console.log('nombre ',personaje.nombre);
    console.log('codeName ',personaje.codeName);
    console.log('vivo ',personaje.vivo);
    console.log('edad ',personaje.edad);
    console.log('trajes ',personaje.trajes);
};

imprimePropiedades2(tony);

const imprimePropiedadesMejorada = ({nombre, codeName, vivo = false, edad = 15, trajes}) => {
    console.log({nombre, codeName, vivo, edad , trajes});
};

const tony2 = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster']
};

imprimePropiedadesMejorada(tony2);

imprimePropiedadesMejorada(tony);