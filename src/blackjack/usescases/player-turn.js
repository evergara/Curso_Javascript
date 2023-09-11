import { pointTurn } from "./turn";
import { paintPlayerPoints } from "./paint-player-point";
import { paintImageDeck } from "./paint-image-deck";
/**
 * Function to manage the turn of player and return the points of player
 * @param {number} currentPoint puntos actuales del jugador example: 21 or 0
 * @param {HTMLElement} elementPointsDiv, HTML element to display points
 * @param {HTMLElement} elementImgDeckDiv, HTML element to display the decks.
 * @param {Array<String>} specialTypesOfCard Example: ["A", "J", "Q", "K"]
 * @param {Array<String>} Decks
 * @returns { number } Return the points of player
 */
export const playerTurn = (currentPoint, elementPointsDiv, elementImgDeckDiv, specialTypesOfCard = [], decks = []) => {
  let { deck, point } = pointTurn(decks, specialTypesOfCard);
  point = currentPoint + point;
  paintPlayerPoints(elementPointsDiv, point);
  paintImageDeck(elementImgDeckDiv, deck);
  return point;
};