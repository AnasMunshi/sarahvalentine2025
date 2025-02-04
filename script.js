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
    // Generate random positions for the No button to run to
    const maxX = window.innerWidth - noButton.offsetWidth; // Maximum width to avoid overflow
    const maxY = window.innerHeight - noButton.offsetHeight; // Maximum height to avoid overflow

    const randomX = Math.random() * maxX; // Random horizontal position
    const randomY = Math.random() * maxY; // Random vertical position

    // Move the No button to the random position
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    // Optionally add animation for smooth movement
    noButton.style.transition = 'all 0.5s ease-in-out';

    // Shrink the No button when clicked
    const currentSize = parseFloat(window.getComputedStyle(noButton).fontSize);
    noButton.style.fontSize = `${currentSize - 2}px`; // Shrinking No button by 2px

    // Grow the Yes button when No button is clicked
    const yesButtonSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${yesButtonSize + 2}px`; // Growing Yes button by 2px
}
