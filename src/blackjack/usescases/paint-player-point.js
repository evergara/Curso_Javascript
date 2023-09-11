/**
 * This function paint a point of the player
 * @param {HTMLElement} playerDeckDiv, element HTML for show point of the player
 * @param {number} pointPlayer, receive point example: 21;
 * @returns {void} Not retunr.
 */
export const paintPlayerPoints = (playerDeckDiv, pointPlayer) => {
  if (!playerDeckDiv) throw new Error("playerDeckDiv argument is required");
  if (!pointPlayer) throw new Error("pointPlayer argument is required");

  playerDeckDiv.innerText = pointPlayer;
};
