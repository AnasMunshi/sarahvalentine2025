document.getElementById("noButton").addEventListener("click", function() {
    const noButton = document.getElementById("noButton");

    // Only move the "No" button (not "Yes")
    noButton.style.animation = "runAway 1s forwards"; // "Run away" animation

    // Reset animation after it finishes
    setTimeout(() => {
        noButton.style.animation = ""; // Reset animation
    }, 1000);
});

document.getElementById("yesButton").addEventListener("click", function() {
    // Change the text to "YAY!"
    document.getElementById("questionText").textContent = "YAY!";

    // Change the gif to the new one
    const gif = document.getElementById("gif");
    gif.src = "https://i.pinimg.com/originals/df/d4/63/dfd4631087fe6b50ba60adbb9de19e9b.gif";

    // Trigger confetti effect (only on "Yes")
    startConfetti();
});

// Simple Confetti effect function
function startConfetti() {
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`;  // Randomize position
        confetti.style.animationDuration = `${Math.random() * 1 + 1}s`;  // Randomize fall speed
        document.body.appendChild(confetti);

        // Remove confetti after animation ends
        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }
}

