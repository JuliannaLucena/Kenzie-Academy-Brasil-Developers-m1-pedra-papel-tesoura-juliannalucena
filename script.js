function playRockPaperScissor(player1, player2) {
    // Define as regras do jogo
    if (player1 === player2) {
        return "Empate!";
    }
    
    if (
        (player1 === "Pedra" && player2 === "Tesoura") ||
        (player1 === "Tesoura" && player2 === "Papel") ||
        (player1 === "Papel" && player2 === "Pedra")
    ) {
        return "Jogador 1 venceu!";
    } else {
        return "Jogador 2 venceu!";
    }
}

// Exemplos de uso
console.log(playRockPaperScissor("Tesoura", "Pedra")); // Jogador 2 venceu!
console.log(playRockPaperScissor("Pedra", "Tesoura")); // Jogador 1 venceu!
console.log(playRockPaperScissor("Papel", "Pedra")); // Jogador 1 venceu!
console.log(playRockPaperScissor("Tesoura", "Papel")); // Jogador 1 venceu!
console.log(playRockPaperScissor("Papel", "Tesoura")); // Jogador 2 venceu!
console.log(playRockPaperScissor("Pedra", "Pedra")); // Empate
