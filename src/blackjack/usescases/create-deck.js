/**
 * This function create a new desck.
 * @param {Array<String>} typesOfCards Example: ["C", "D", "H", "S"];
 * @param {Array<String>} specialTypesOfCard Example: ["A", "J", "Q", "K"]
 * @returns {Array<String>} Return new Desck
 */
export const createdDeck = (typesOfCards, specialTypesOfCard) => {
  if (!typesOfCards || typesOfCards.length === 0) throw new Error("Type of card is required and must to array of string");
  if (!specialTypesOfCard || specialTypesOfCard.length === 0) throw new Error("Type of special cards is required and must to array of string");

  let decks = [];
  for (let i = 2; i <= 10; i++) {
    for (const typeOfCard of typesOfCards) {
      decks.push(i + typeOfCard);
    }
  }
  decks = createdDeckSpecial(decks, typesOfCards, specialTypesOfCard);
  return shuffle(decks);
};

/**
 * This function return the desck with the card special
 * @param {Array<String>} decks
 * @param {Array<String>} typesOfCards Example: ["C", "D", "H", "S"];
 * @param {Array<String>} specialTypesOfCard Example: ["A", "J", "Q", "K"]
 * @returns {Array<String>} Return a Desck with the card special
 */
const createdDeckSpecial = (decks, typesOfCards, specialTypesOfCards) => {
  if (!decks || decks.length === 0) throw new Error("The decks is required and must to array of string");
  if (!typesOfCards || typesOfCards.length === 0) throw new Error("Type of card is required and must to array of string");
  if (!specialTypesOfCards || specialTypesOfCards.length === 0) throw new Error("Type of special cards is required and must to array of string");

  for (const typeOfCard of typesOfCards) {
    for (const specialTypeOfCard of specialTypesOfCards) {
      decks.push(specialTypeOfCard + typeOfCard);
    }
  }
  return decks;
};

/**
 * This funtion return a shuffle desck
 * @param {Array<String>} Decks
 */
const shuffle = (decks) => {
  if (!decks || decks.length === 0) throw new Error("The decks is required and must to array of string");
  return decks.sort(() => Math.random() - 0.5);
};
