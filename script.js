// Selecting the buttons, gif, and text elements
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const gif = document.getElementById('gif');
const questionText = document.querySelector('.question');

// Event listener for the Yes button
yesButton.addEventListener('click', () => {
    // Change text and gif
    questionText.textContent = "YAY!";
    gif.src = "https://i.pinimg.com/originals/df/d4/63/dfd4631087fe6b50ba60adbb9de19e9b.gif";

    // Trigger confetti effect
    for (let i = 0; i < 30; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        document.body.appendChild(confetti);
    }
});

// Event listener for the No button
noButton.addEventListener('click', () => {
    // Move the No button away with animation
    noButton.style.animation = 'runAway 0.5s forwards';

    // Disable the No button after it moves
    setTimeout(() => {
        noButton.disabled = true;
    }, 500);
});
