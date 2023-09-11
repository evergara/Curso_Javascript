import { pointTurn } from "./turn";
import { paintPlayerPoints } from "./paint-player-point";
import { paintImageDeck } from "./paint-image-deck";
/**
 * Function to manage the turn and return the points
 * @param {number} pointMinimum example: 21 or 0
 * @param {HTMLElement} elementPointsDiv, HTML element to display points
 * @param {HTMLElement} elementImgDeckDiv, HTML element to display the decks.
 * @param {Array<String>} specialTypesOfCard Example: ["A", "J", "Q", "K"]
 * @param {Array<String>} Decks
 * @returns { number } Return the points from the computer
 */
export const computerTurn = (elementPointsDiv, elementImgDeckDiv, pointMinimum, specialTypesOfCard = [], decks = []) => {
  if (!pointMinimum) throw new Error("The argument pointMinimum is required");
  let pointTotal = 0;

  do {
    let { deck, point } = pointTurn(decks, specialTypesOfCard);
    pointTotal = pointTotal + point;
    paintPlayerPoints(elementPointsDiv, pointTotal);
    paintImageDeck(elementImgDeckDiv, deck);

    if (pointTotal >= 21) break;
  } while (pointTotal < pointMinimum && pointMinimum <= 21);

  return pointTotal;
};
