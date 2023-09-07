let a = 1;

//a = prompt('Digite nmero', 5);

if(a > 10){
    console.log('A es mayor a 10');
} else {
    console.log('A es menor a 10', 5);
}

console.log('Fin del programa');


const date = new Date();
console.log({date})

const today = date.getDay();

if(today === 0 ) {
    console.log('Domingo')
} else if(today === 1) {
    console.log('Lunes')
} else if(today === 2) {
    console.log('Martes')
} else if(today === 3) {
    console.log('Miercoles')
} else if(today === 4) {
    console.log('Jueves')
} else if(today === 5) {
    console.log('Viernes')
} else if(today === 6) {
    console.log('Sabado')
} else {
    console.log('Dia no identificado')
}

//Ejercicio 

const LetterDay = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
console.log('Dia es: ', LetterDay[today]);

const LetterDayObject = {
    0:'Sunday',
    1: 'Monday', 
    2: 'Tuesday', 
    3: 'Wednesday', 
    4: 'Thursday', 
    5: 'Friday', 
    6: 'Saturday',
}

console.log('object Dia es: ', LetterDayObject[today] || 'Dia no identificado');

const LetterDayObjectAction = {
    0: (day)=>`Sunday - ${day}`,
    1: (day)=> `Monday - ${day}`, 
    2: (day)=> `Tuesday - ${day}`, 
    3: (day)=> `Wednesday - ${day}`, 
    4: (day)=> `Thursday - ${day}`, 
    5: (day)=> `Friday - ${day}`, 
    6: (day)=> `Saturday - ${day}`,
}

console.log('object con procedimiento Dia es: ', LetterDayObjectAction[today](today) || 'Dia no identificado');