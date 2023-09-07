//alert('Hola mundo javascript');



let name = getPrompt('nombre');
let lastName = getPrompt('apellido');
let age = getPrompt('edad');

console.table({name, lastName, age});
const myData = `my name is ${name} and my last name is ${lastName} and I'm ${age} years old`;
console.log(myData);
alert(myData);


const seleccion = confirm('¿Está seguro de borrar esto?');
console.log( seleccion );

// console.log( global );


function getPrompt(dato){
    return prompt('¿Cuál es tu '+ dato +' ?', `Digita tu ${dato}, por favor`);
}
