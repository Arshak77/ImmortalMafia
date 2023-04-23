// Get references to DOM elements
const card = document.querySelector("#card");
const options = document.querySelectorAll(".option");
const playerNameInput = document.querySelector("#player-name");
const continueBtn = document.querySelector("#continue-btn");

// Add event listener to card to flip it when clicked
card.addEventListener("click", () => {
  card.classList.toggle("flipped");
});

// Add event listeners to options to select a color when clicked
options.forEach((option) => {
    option.addEventListener("click", function() {
      // Get the selected color
      const color = option.getAttribute("data-color");
      // Set the color for the selected player
      selectedColors[currentPlayerIndex] = color;
      // Display the selected color on the card
      cardFronts[currentPlayerIndex].style.backgroundColor = color;
      // Move to the next player
      currentPlayerIndex++;
      // If all players have selected a color, enable the continue button
      if (currentPlayerIndex >= numPlayers) {
        continueButton.disabled = false;
      }
    });
  });
