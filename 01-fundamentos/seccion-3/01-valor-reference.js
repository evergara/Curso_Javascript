let a = 10;
let b = a;

console.log('Primitivo trabajamos por Valor', {a, b});
a = 15;
console.log('Primitivo trabajamos por Valor b no cambia', {a, b});

//Object or no primitive

let juan = {nombre: 'Juan'};
let ana = juan


console.log('Todos los objetos se pasan por Referencia ', {juan, ana});
ana.nombre = 'Ana';
console.log('Cambio Ana y se cambio todo', {juan, ana});


const changeName = (person) =>{
    person.nombre = 'Tony';
    return person;
}

let peter = {nombre: 'peter'}
let tony = changeName(peter);

console.log('Vemos que todos tienen el mismo nombre la referencia nos ha jugado una mala pasada: ', {peter, tony})

//Para resolver el problema de referencia podemos lo siguiente ....Operador spread


let juan2 = {nombre: 'Juan'};
let ana2 =  {...juan}

console.log('Todos los objetos se pasan por Referencia ', {juan2, ana2});
ana.nombre = 'Ana';
console.log('Cambio Ana se rompio la referncia', {juan2, ana2});


const changeNameSpread = ({...person}) =>{
    person.nombre = 'Tony';
    return person;
}

let peter2 = {nombre: 'peter'}
let tony2 = changeName(peter);
console.log('Vrompiendo la  referencia nos ha jugado una mala pasada: ', {peter2, tony2})

//Referencias con arreglos

const fruits = ['Apple', 'Pear', 'Pineapple'];
const othertFruits = fruits;

othertFruits.push('Mango');

console.table({fruits, othertFruits});


console.log('Rompiendo referencia de arregles');
const fruits2 = ['Apple', 'Pear', 'Pineapple'];

console.time('slice')
const othertFruits2 = fruits2.slice();
console.timeEnd('slice')

othertFruits2.push('Mango');
console.table({fruits2, othertFruits2});

console.log('Rompiendo referencia de arregles de otra forma');
const fruits3 = ['Apple', 'Pear', 'Pineapple'];
console.time('spread')
const othertFruits3 = [...fruits2];
console.timeEnd('spread')
othertFruits3.push('Mango');
console.table({fruits3, othertFruits3});