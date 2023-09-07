const returnTrue = () => {
    console.log('Return true');
    return true;
}

const returnFalse = () => {
    console.log('Return false');
    return false;
}

console.warn('Not or Negation');
let isTrue = true;
let isfalse = false;
console.log(isTrue); // true
console.log(!isTrue); // false
console.log(!!isTrue); // true
console.log(!isfalse); // true
console.log(!!isfalse); // false
console.log(isfalse); // false
console.log(!returnTrue()); // false
console.log(!returnFalse()); // true

console.warn('AND - both is true');
console.log(true && true); //true
console.log(true && !false); //true
console.log(true && !true); //false

console.log('=====Caso especial=============');

console.log(returnFalse() && returnTrue());
console.log('==Solo ejecuta la primera porque es false====');
console.log(returnTrue() && returnFalse() );
console.log(!returnFalse() && returnTrue());

console.warn('OR - both is false all false');
console.log(returnTrue() || returnFalse()); //true
console.log(returnFalse() || returnTrue()); // true


console.warn('OR - Assignments - uso no común');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;
const soyTrue = true;

const a1 = false && 'Hola Mundo' && 150;
const a2 = 'hola' && 'Mundo' && soyFalso && 150;
const a3 = 'hola' && 'Mundo' && 150;

console.log('Assignments &&: ', {a1, a2, a3})

const a4 = 'Hola soy asignado' || "Nunca nos ejecutamos" || soyUndefined || soyNull;
const a5 = soyFalso || 'Hola Mundo' || 150;
const a6 = soyFalso || soyUndefined || soyNull;
const a7 = soyFalso || soyUndefined || soyNull || returnTrue() || "Nunca nos ejecutamos" || returnFalse();

console.log('Assignments || ', {a4, a5, a6, a7})