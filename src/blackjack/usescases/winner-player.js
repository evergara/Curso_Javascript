export const winnerPlayer = (elementMessageWinnerDiv, pointPlayer, pointComputer) => {
    let message = "";
    message =
        pointPlayer === pointComputer
        ? "Empate :("
        : pointPlayer > 21
        ? "Gano la maquina :("
        : pointComputer > 21
        ? "Felicitaciones ganastes :)"
        : pointPlayer === 21
        ? "Felicitaciones ganastes :)"
        : "Gano la maquina :(";

    elementMessageWinnerDiv.innerText = message;
};