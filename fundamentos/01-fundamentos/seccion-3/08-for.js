const topic = 'Ciclo :: For';
console.info(`%c ${topic}`,  'font-weight: bold; color: red;');

const heroes = ['Batman', 'Superman', 'Mujer Maravilla'];

console.log("For tradicional");

for (let i = 0; i < heroes.length; i++) {
    const heroe = heroes[i];
    console.log({heroe});
}

console.log("For in");

for (const index in heroes) {
    const heroe = heroes[index]
    console.log({heroe});
}

console.log("For of");
 for (const heroe of heroes) {
    console.log({heroe});
 }


console.log("For Foreach");
heroes.forEach((heroe) => console.log({heroe}));