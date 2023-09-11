/**
 * This function paint a img of deck of the players
 * @param {HTMLElement} playerDeckDiv, element HTML for show img
 * @param {String} deck, receive a card from the deck Example: 7C;
 * @returns {void} Not retunr.
 */
export const paintImageDeck = (playerDeckDiv, deck) => {
  if(!playerDeckDiv) throw new Error('playerDeckDiv argument is required');
  if(!deck) throw new Error('deck argument is required');

  const imgDeck = document.createElement("img");
  imgDeck.classList.add("decks");
  imgDeck.src = "./assets/cartas/" + deck + ".png";
  imgDeck.alt = deck;
  playerDeckDiv.append(imgDeck);
};
