/**
 * This funtion return a deck card
 * @param {Array<String>} Decks
 * @returns {string} Return return a deck card. Example: 7C
 */
export const orderDeck = (decks) => {
  if (!decks || decks.length === 0) throw Error("No hay cartas en el Decks");
  const deck = decks.pop();
  return deck;
};
