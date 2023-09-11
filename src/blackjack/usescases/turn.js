import { deckValue, orderDeck} from "./";
/**
 * This function return the point of the player
 * @param {Array<String>} Decks
 * @param {Array<String>} specialTypesOfCard Example: ["A", "J", "Q", "K"]
 * @returns {deck, point} Return the point of the player and deck.
 */
export const pointTurn = (decks, specialTypesOfCard) => {
  if (!decks || decks.length === 0) throw Error("There are no deck in the Decks");
  if (!specialTypesOfCard || specialTypesOfCard.length === 0) throw new Error("Type of special cards is required and must to array of string");

  const deck = orderDeck(decks);
  const point = deckValue(deck, specialTypesOfCard);
  return { deck, point };
};
