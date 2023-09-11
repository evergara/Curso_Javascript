/**
 * This function returna the value the desck card.
 * @param {String} receive a card from the deck Example: 7C;
 * @param {Array<String>} specialTypesOfCard Example: ["A", "J", "Q", "K"]
 * @returns {number} Return the value the desck card
 */
export const deckValue = (deck, specialTypesOfCard) => {
  if (!deck) throw new Error("The card from the deck is required");
  if (!specialTypesOfCard || specialTypesOfCard.length === 0) throw new Error("Type of special cards is required and must to array of string");

  const value = deck.substring(0, deck.length - 1);
  return value === "A" ? 11 : specialTypesOfCard.includes(value, 0) ? 10 : value * 1;
};
