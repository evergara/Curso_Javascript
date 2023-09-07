//Patron module  IIFE

(() => {
  "use strict";
  /**
   * 2C =  Two of clubs (Tréboles)
   * 2D =  Two of Diaminds (Diamentes)
   * 2H =  Two of hearts (Corazones)
   * 2S =  Two of Spades (Espadas)
   */
  const typeDecks = ["C", "D", "H", "S"],
    specialTypeDecks = ["A", "J", "Q", "K"];

  let decks = [];
  const cloneDecks = [];

  //Definicion de Jugadores
  let numberPlayers = 1;
  let players = [],
    pointsPlayers = [];

  //Definicion de Acciones del Juego
  const ActionPlay = {
    NEW: "NEW",
    PROCESS: "PROCESS",
    FINISH: "FINISH",
  };
  const gamesToPlay = [];

  let isNewPlay = false;
  let weBegin = true;

  //Referencias

  //referencen HTML
  const btnOrder = document.querySelector("#btnOrder"),
    btnNew = document.querySelector("#btnNew"),
    btnFinish = document.querySelector("#btnFinish");

  const player_deck = document.querySelector("#player_deck"),
    conmputer_deck = document.querySelector("#conmputer_deck"),
    smallPoints = document.querySelectorAll("small"),
    winner_message = document.querySelector("#winner_message");

  /**
   * This funtion initializa the play
   */
  const initPlay = (PlayerNumber = 1) => {
    decks = createdDeck();
    pointsPlayers = [];
    for (let index = 0; index < PlayerNumber + 1; index++) {
      pointsPlayers.push(0);
    }
  };

  /**
   * This function create new desk
   */
  const createdDeck = () => {
    decks = [];
    for (let i = 2; i <= 10; i++) {
      for (const typeDeck of typeDecks) {
        decks.push(i + typeDeck);
      }
    }
    createdDeckSpecial();
    return shuffle([...decks]);
  };

  /**
   * This function create new desk especial
   */
  const createdDeckSpecial = () => {
    for (const typeDeck of typeDecks) {
      for (const specialTypeDeck of specialTypeDecks) {
        decks.push(specialTypeDeck + typeDeck);
      }
    }
  };

  /**
   * This function shuffle decks
   */
  const shuffle = (decks) => {
    decks.sort(() => Math.random() - 0.5);
    return [...decks];
  };

  /**
   * This function return one desk
   */
  const orderDeck = () => {
    if (decks.length === 0) {
      throw "No hay cartas en el Deck";
    }
    return decks.pop();
  };
  /**
   * This function return value an desk
   */
  const valueDeck = (deck) => {
    const value = deck.substring(0, deck.length - 1);
    return value === "A"
      ? 11
      : specialTypeDecks.includes(value, 0)
      ? 10
      : value * 1;
  };
  /**
   *
   * @param {*} turno: [last] is the computer
  */
  const accumulatePoints = (deck, turn) => {
    pointsPlayers[turn] = pointsPlayers[turn] + valueDeck(deck);
    smallPoints[turn].innerText = pointsPlayers[turn];
    return pointsPlayers[turn];
  };

  //Event
  const turnComputer = (point_Player) => {
    do {
      const deck = orderDeck();
      const pointComputer = accumulatePoints(deck, pointsPlayers.length - 1);

      const imgDeck = document.createElement("img");
      imgDeck.classList.add("decks");
      imgDeck.src = "./assets/cartas/" + deck + ".png";
      imgDeck.alt = deck;
      conmputer_deck.append(imgDeck);
      if (pointComputer >= 21) break;
    } while (pointComputer < point_Player && point_Player <= 21);
    btnFinish.disabled = true;
    winner(point_Player, pointComputer);
  };

  btnOrder.addEventListener("click", () => {
    const deck = orderDeck();
    const pointPlayer = accumulatePoints(deck, 0); // Esto se debe mejorar

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

  btnFinish.addEventListener("click", () => {
    btnFinish.disabled = true;
    btnOrder.disabled = true;
    weBegin = true;
    turnComputer(accumulatePoints[0]);
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
    accumulatePoints[0]  = 0;
    accumulatePoints[0]  = 0;
    btnOrder.disabled = false;
    btnFinish.disabled = false;
    player_deck.innerHTML = "";
    conmputer_deck.innerHTML = "";
    smallPoints[0].innerText = 0;
    smallPoints[1].innerText = 0;
    winner_message.innerText = "";
    btnFinish.disabled = true;
    isNewPlay = true;
    weBegin = true;
    initPlay();
  };
})();
