/**
 * 2C =  Two of clubs (Tréboles)
 * 2D =  Two of Diaminds (Diamentes)
 * 2H =  Two of hearts (Corazones)
 * 2S =  Two of Spades (Espadas)
 */

let decks = [];
let cloneDecks = [];
let typeDecks = ["C", "D", "H", "S"];
let spaecialTypeDecks = ["A", "J", "Q", "K"];

let pointPlayer = 0;
let pointComputer = 0;
let isNewPlay = false;
let weBegin = true;

//referencen HTML
let btnOrder = document.querySelector("#btnOrder");
let btnNew = document.querySelector("#btnNew");
let btnFinish = document.querySelector("#btnFinish");
const player_deck = document.querySelector("#player_deck");
const conmputer_deck = document.querySelector("#conmputer_deck");
const smallPoints = document.querySelectorAll("small");
const winner_message = document.querySelector("#winner_message");
/**
 * This function create new desk
 */
const createdDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (const typeDeck of typeDecks) {
      decks.push(i + typeDeck);
    }
  }
  createdDeckSpecial();
  shuffle();
  console.log(decks);
};

/**
 * This function create new desk especial
 */
const createdDeckSpecial = () => {
  for (const typeDeck of typeDecks) {
    for (const spaecialTypeDeck of spaecialTypeDecks) {
      decks.push(spaecialTypeDeck + typeDeck);
    }
  }
};

/**
 * This function shuffle decks
 */
const shuffle = () => {
  decks.sort(() => Math.random() - 0.5);
  cloneDecks = [...decks];
};

/**
 * This function return one desk
 */
const orderDeck = () => {
  if (cloneDecks.length === 0) {
    throw "No hay cartas en el Deck";
  }

  const deck = cloneDecks.pop();
  return deck;
};
/**
 * This function return value ane desk
 */
const valueDeck = (deck) => {
  const value = deck.substring(0, deck.length - 1);
  return value === "A"
    ? 11
    : spaecialTypeDecks.includes(value, 0)
    ? 10
    : value * 1;
};

//valueDeck(orderDeck());

//Event

btnOrder.addEventListener("click", () => {
  const deck = orderDeck();
  pointPlayer = pointPlayer + valueDeck(deck);
  smallPoints[0].innerText = pointPlayer;

  const imgDeck = document.createElement("img");
  imgDeck.classList.add("decks");
  imgDeck.src = "./assets/cartas/" + deck + ".png";
  imgDeck.alt = deck;
  player_deck.append(imgDeck);

  if (isNewPlay) {
    btnFinish.disabled = false;
    weBegin = false;
  }

  if (pointPlayer > 21) {
    console.warn("Lo siento mucho, perdistes");
    btnOrder.disabled = true;
    turnComputer(pointPlayer);
  }

  if (pointPlayer === 21) {
    console.warn("21, genial");
    btnOrder.disabled = true;
    turnComputer(pointPlayer);
  }
  
});

btnNew.addEventListener("click", () => {
  let response = true;

  if (!weBegin) {
    response = confirm("Seguro que quieres terminar esta partida");
  }

  if (response) {
    runNewPlay();
  }
});

const turnComputer = (point_Player) => {
  
  do {
    const deck = orderDeck();
    pointComputer = pointComputer + valueDeck(deck);
    smallPoints[1].innerText = pointComputer;

    const imgDeck = document.createElement("img");
    imgDeck.classList.add("decks");
    imgDeck.src = "./assets/cartas/" + deck + ".png";
    imgDeck.alt = deck;
    conmputer_deck.append(imgDeck);
    if (pointComputer >= 21) break;
  } while ((pointComputer < point_Player) && point_Player <= 21);
  btnFinish.disabled = true;
  winner(point_Player, pointComputer);
};

btnFinish.addEventListener("click", () => {
  btnFinish.disabled = true;
  btnOrder.disabled = true;
  weBegin = true;
  turnComputer(pointPlayer);
});

const winner = (point_Player, point_computer) => {
  let message = "";
  weBegin = true;
  message =
    point_Player === point_computer
      ? "Empate :("
      : point_Player > 21
      ? "Gano la maquina :("
      : point_computer > 21
      ? "Felicitaciones ganastes :)"
      : point_Player === 21
      ? "Felicitaciones ganastes :)"
      : "Gano la maquina :(";

  winner_message.innerText = message;
};

const runNewPlay = () => {
  pointPlayer = 0;
  pointComputer = 0;
  btnOrder.disabled = false;
  btnFinish.disabled = false;
  player_deck.innerHTML = "";
  conmputer_deck.innerHTML = "";
  smallPoints[0].innerText = 0;
  smallPoints[1].innerText = 0;
  winner_message.innerText = '';
  btnFinish.disabled = true;
  isNewPlay = true;
  weBegin = true;
  decks = [];
  createdDeck();
};

runNewPlay();
