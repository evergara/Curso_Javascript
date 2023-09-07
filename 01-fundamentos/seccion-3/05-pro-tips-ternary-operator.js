const topic = 'Pro.tips Ternary operator';
console.info(`%c ${topic}`,  'font-weight: bold; color: red;');



const isGreater = (a, b) => (a > b) ? a : b ;
const hasMembership = (isAMember) => (isAMember) ? '2 Dolars' : '20  Dolars';

console.log(isGreater(20, 12));
console.log(isGreater(20, 22));
console.log(hasMembership(true));
console.log(hasMembership(false));


const isfriend = true;

const friends = [
    "Tony",
    "Peter",
    "Dr Strange",
    isfriend ? 'Thor' : 'Loki',
    (()=> "Nick Fury")(),// Not Ternary operartor
    isGreater(20, 45),// Not Ternary operartor
    hasMembership(false)// Not Ternary operartor
]

console.log(friends);

const whatIsRating = (note) => note >= 95 ? 'A+':
                                note >= 90 ? 'A':
                                note >= 85 ? 'B+':
                                note >= 80 ? 'B':
                                note >= 75 ? 'C+':
                                note >= 70 ? 'C': 'F';

console.log(whatIsRating(80));
console.log(whatIsRating(90));
console.log(whatIsRating(100));