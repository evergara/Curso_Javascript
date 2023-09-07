
//Maneras de crear un arreglo
// const arr = new Array(10);
// const arr = [];
// console.log(arr);

let myFavoriteFoods = new Array(3)

myFavoriteFoods = ['Japones Food', 'Seafood', 'Colombian Food',  'Italian Food', 1, 3, 4, 5, 7];

console.log(myFavoriteFoods);

//Los arreglos son un objeto muy parecido a  una lista de iformacion, que contiene un grupo de elementos
// Formas de crear arreglos
let arr = new Array(10);
let arr2 = [];

let videoJuegos = [ 'Mario 3', 'Megaman', 'Chrono Trigger' ];
console.log({ videoJuegos });

console.log( videoJuegos[0] ); // visualizar dato de un arregro mediante in index
console.log( videoJuegos[1] );
console.log( videoJuegos[2] );

let arregloCosas = [
    true,
    123,
    'Emerson',
    1 + 2,
    function(){},
    ()=>{},
    { a: 1 },
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. Willy',
        'Woodman'
    ]],
    ['Japones Food', 'Seafood', 'Colombian Food',  'Italian Food']    
];

console.log({ arregloCosas });
console.log( arregloCosas[2] );
console.log( arregloCosas[7][4][1] );
console.log( arregloCosas[8]);
