const topic = 'Ciclos :: While and Do while';
console.info(`%c ${topic}`,  'font-weight: bold; color: red;');


//##While
 console.log('Escribir esto varias veces');
 console.log('Escribir esto varias veces');
 console.log('Escribir esto varias veces');
 console.log('Escribir esto varias veces');
 console.log('Escribir esto varias veces');
 console.log('Escribir esto varias veces');
 console.log('Que canson');

const tallManyTimes = 10;
let contador = 0;

while(tallManyTimes > contador ){
    contador++;
    console.log('Escribir esto varias veces: ' + contador);
    
}   

const cars = ["Toyota", "Ford", "Mazda", "Honda" ];
let i = 0;

while(i < cars.length){
    console.log(cars[i]);
    i++;
}
let k = 0;
while(cars[k]){
    if(k === 1 ){
        break;
    }
    console.log(cars[k], '- K');
    k++;
}
let j = 0;
while(cars[j]){
    if(j === 1 ){
        j++;
        continue;
    }
    console.log(cars[j], ' - J');
    j++;
}

//##DoWhile

console.log('Do While');

let l = 0;

do{
    console.log(cars[l]);
    l++;
} while(cars[l])