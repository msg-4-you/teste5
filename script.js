let currentScreen = 1;

function nextScreen(screen) {
    document.getElementById(`tela${currentScreen}`).style.display = 'none';
    document.getElementById(`tela${screen}`).style.display = 'block';
    currentScreen = screen;

    // Inicia a música quando o usuário clica no botão "Começar"
    if (screen === 2) {
        let audio = document.getElementById("audioPlayer");
        audio.play().catch(error => console.log("Reprodução bloqueada:", error));
    }
}

// Exibe a primeira tela
document.getElementById("tela1").style.display = 'block';

function checkAnswer(isCorrect) {
    if (isCorrect) {
        document.getElementById("feedback").textContent = "Resposta Correta!";
        document.getElementById("feedback").style.color = "green";
        setTimeout(() => nextScreen(4), 2000);
    } else {
        document.getElementById("feedback").textContent = "Resposta Errada! Tente novamente.";
        document.getElementById("feedback").style.color = "red";
    }
}
