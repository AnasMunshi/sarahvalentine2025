document.getElementById("noButton").addEventListener("click", function() {
    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");

    // Get the current position of the buttons
    const noButtonPosition = noButton.getBoundingClientRect();
    const yesButtonPosition = yesButton.getBoundingClientRect();

    // Swap their positions by changing their CSS left/right properties
    noButton.style.position = "absolute";
    yesButton.style.position = "absolute";
    noButton.style.left = yesButtonPosition.left + "px";
    yesButton.style.left = noButtonPosition.left + "px";

    // Add some fun animation to make it obvious
    noButton.style.transform = "scale(1.2)";
    setTimeout(() => {
        noButton.style.transform = "scale(1)";
    }, 300);
});
