document.getElementById("noButton").addEventListener("click", function() {
    const noButton = document.getElementById("noButton");

    // Only move the No button (not Yes button)
    noButton.style.animation = "runAway 1s forwards"; // "Run away" animation

    // Optional: Add a fun delay before allowing it to reset
    setTimeout(() => {
        noButton.style.animation = ""; // Reset animation
    }, 1000);
});

document.getElementById("yesButton").addEventListener("click", function() {
    // Change the text to YAY!
    document.getElementById("questionText").textContent = "YAY!";

    // Change the gif to the new one
    const gif = document.getElementById("gif");
    gif.src = "https://i.pinimg.com/originals/df/d4/63/dfd4631087fe6b50ba60adbb9de19e9b.gif";

    // Trigger confetti effect (using a simple confetti function)
    startConfetti();
});

// Simple Confetti effect function
function startConfetti() {
    const confetti = document.createElement('div');
    confetti.style.position = 'absolute';
    confetti.style.top = '0';
    confetti.style.left = '50%';
    confetti.style.width = '100px';
    confetti.style.height = '100px';
    confetti.style.backgroundColor = 'gold';
    confetti.style.borderRadius = '50%';
    confetti.style.animation = 'fall 3s ease-in-out infinite';
    document.body.appendChild(confetti);

    // Confetti falling animation
    @keyframes fall {
        0% {
            transform: translateY(-100%);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh);
            opacity: 0;
        }
    }
}
