let hitCount = 0;
let isGameStarted = false;
let time;
const mosquito = document.getElementById("mosquito");
const playground = document.getElementById("playGround");
document.getElementById("stop").style.display = "none";

// Function to stop the game
function stopGame() {
    setTimeout(() => {
        isGameStarted = false;
        document.getElementById("stop").style.display = "none";
        document.getElementById("GameStatus").innerText = "Game Stopped";
        clearInterval(time);
    }, 1000);
}

// Function to start the game with difficulty
function startGame(difficulty) {
    hitCount = 0;
    isGameStarted = true;
    document.getElementById("GameStatus").innerText = "Game Started";
    document.getElementById("stop").style.display = "block";

    const playgroundRect = playground.getBoundingClientRect();

    // Set interval time based on difficulty
    const intervalTime = difficulty === "Easy" ? 2000 : difficulty === "Medium" ? 1500 : 1000;

    // Move mosquito at intervals
    time = setInterval(() => {
        const maxX = playgroundRect.width - mosquito.offsetWidth;
        const maxY = playgroundRect.height - mosquito.offsetHeight;
        const i = Math.random() * maxX;
        const j = Math.random() * maxY;
        mosquito.style.left = `${i}px`;
        mosquito.style.top = `${j}px`;
    }, intervalTime);

    // End game after 30 seconds
    setTimeout(() => {
        clearInterval(time);
        isGameStarted = false;
        document.getElementById("GameStatus").innerText = "Game Over";
        document.getElementById("stop").style.display = "none";
        alert("Game Over");
        prompt("How is the Game!");
    }, 30000);
}

// Function to register mosquito hit
function hitMosquito() {
    if (isGameStarted) {
        hitCount++;
        document.getElementById("totalHit").innerText = hitCount;
    }
}
