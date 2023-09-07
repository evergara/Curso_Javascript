const topic = 'Ternary operator :: exoresion-boolean ? expresion_true : exxpresion_false';
console.info(`%c ${topic}`,  'font-weight: bold; color: red;');

/**
 * Los dias de las semana abrimos a las 11
 * pero  los fines de semana abrimos a las 9
 */

let dia = 6; //Esto deberia ser una const pero por efecto de practica lo puse let
let horaActual = 8; //Esto deberia ser una const pero por efecto de practica lo puse let
const diasFindeSemana = [0,6];
let horaApertura;
let mensaje;

console.warn('Primera solución:');
if(dia === 0 || dia === 6){
   horaApertura = 9;
} else {
    horaApertura = 11;
}

if(horaActual >= horaApertura){
    mensaje = `Estamos abierto`;
} else{
    mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
}

console.log({horaActual, horaApertura, mensaje});

console.warn('Segunda solución:');

dia = 1;
horaActual = 12;

if(diasFindeSemana.includes(dia)){
    horaApertura = 9;
 } else {
     horaApertura = 11;
 }
 
 if(horaActual >= horaApertura){
     mensaje = `Estamos abierto`;
 } else{
     mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
 }

 console.log({horaActual, horaApertura, mensaje});

console.warn('Tercera y mas optima solución:');

dia = 0;
horaActual = 9;

horaApertura = (diasFindeSemana.includes(dia)) ? 9 : 11;
mensaje = (horaActual >= horaApertura)? `Estamos abierto` : `Esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log({horaActual, horaApertura, mensaje});
