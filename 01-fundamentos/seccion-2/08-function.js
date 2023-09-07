function saludar(){
    console.log('Esto se usa solo las funciones tradicionales:: ', arguments);
    console.log('Hola mundo');
    return ['!Ya salude¡', 'jajajajajajaja'];

    console.log('Esto nunca se va a ejecutar');
}

function saludar2(){
    console.log('Esto se usa solo las funciones tradicionales:: ', arguments);
    console.log('Hola mundo');
}



const returnDaludar = saludar('esto no se refleja','tampoco');
const returnDaludar2 = saludar2('Gilbert', 55, true);

console.log({returnDaludar, returnDaludar2})

const saludoDinamico = function (name){
    console.log('Hola ' + name);
}

const arrowFuntion = (name) =>{
    saludoDinamico(name);
}
const funtionAnonima  = function(name){
    saludoDinamico(name);
}

funtionAnonima('Anónimo');
saludoDinamico('Emerson');
saludoDinamico('Brilis');
saludoDinamico('Brayan');
arrowFuntion('Danna');

function suma(a, b){
    return a + b;
}

const sumar = (a, b) => a + b;
console.log(suma(10, 2));
console.log(sumar(10, 5));

//Ejercicio

const getRandom = () => Math.random();

console.log('Random: ', getRandom());