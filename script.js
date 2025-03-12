let currentScreen = 1;

function nextScreen(screen) {
    document.getElementById(`tela${currentScreen}`).style.display = 'none';
    document.getElementById(`tela${screen}`).style.display = 'block';
    currentScreen = screen;
}

// Exibe a primeira tela
document.getElementById("tela1").style.display = 'block';

// Inicia a música automaticamente
window.addEventListener("DOMContentLoaded", () => {
    let audio = document.getElementById("audioPlayer");
    audio.play().catch(error => console.log("Reprodução automática bloqueada pelo navegador:", error));
});

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
