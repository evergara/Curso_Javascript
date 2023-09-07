
//string, number, boolean, undefined, null(objet)
let lastName;

let name = 'Peter Parker';
console.log( {name} );

name = 'Ben Parker';
console.log( {name} );

name = "Tía May";
name = `Tía May`;

console.log( typeof name );

name = 123;
console.log( typeof name );


let esMarvel = false;
console.log({esMarvel});
console.log( typeof esMarvel );


let edad = 33;
console.log( typeof edad );

edad = 33.001;
console.log( typeof edad );


let superPoder;
console.log( typeof superPoder ); // ???

let soyNull = null;
console.log( typeof soyNull ); // ???


let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log( typeof symbol1 );


console.log( symbol1 === symbol2 );

