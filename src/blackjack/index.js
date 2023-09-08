import {createdDeck} from './usescases/create-deck';
import {orderDeck} from './usescases/order-deck';
import {deckValue} from './usescases/deck-value';
/**
 * 2C =  Two of clubs (Tréboles)
 * 2D =  Two of Diaminds (Diamentes)
 * 2H =  Two of hearts (Corazones)
 * 2S =  Two of Spades (Espadas)
 */

let decks = [];
let typesOfCards = ["C", "D", "H", "S"];
let specialTypesOfCard = ["A", "J", "Q", "K"];

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


decks  = createdDeck(typesOfCards, specialTypesOfCard);


//Event

btnOrder.addEventListener("click", () => {
  const deck = orderDeck(decks);
  console.log(decks)
  pointPlayer = pointPlayer + deckValue(deck, specialTypesOfCard);
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
    const deck = orderDeck(decks);
    pointComputer = pointComputer + deckValue(deck, specialTypesOfCard);
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
  decks  = createdDeck(typesOfCards, specialTypesOfCard);
};

runNewPlay();
