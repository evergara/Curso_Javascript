let games = ['Zelda', 'Mario', 'Metroid', 'Chrono'];

console.log('Large: ', games.length);


let firstGame = games[games.length - games.length];
let lastGame = games[games.length - 1];

console.log({firstGame, lastGame});


games.forEach((game, index, arr)=>{
  console.table({game, index, arr});
});
//Methos push, it is for add element to finist array
let newLarge = games.push('F-Zero');
printLargeArray();
//Methos unshift, it is for add element to first array
newLarge = games.unshift('Fire Emblem');
printLargeArray()

//Delete the last element to array and return element
let itemDelete = games.pop();
console.log({itemDelete})
newLarge = games.length
printLargeArray()


//Delete the element for a index
let pop = 1;
itemDelete = games.splice(pop, 1);
newLarge = games.length
console.log({itemDelete})
printLargeArray()

//

let index = games.indexOf('Metroid');
let index2 = games.indexOf('metroid');
console.log({index, index2});


//TODO: reference or value


function printLargeArray(){
  console.log('New large: ', newLarge);
  console.table({games})
}
