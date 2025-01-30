// document.addEventListener("DOMContentLoaded", function () {
//   // Set focus on the input field when the page loads
//   const numberInput = document.getElementById("numberInput");
//   numberInput.focus();

//   // Add event listener for the Enter key and ShiftRight key
//   document.addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//       document.getElementById("mainButton").click();
//     } else if (event.code === "ShiftRight") {
//       document.getElementById("floatingButton").click();
//     }
//   });
// });

// async function showFact() {
//   // Ensure elements exist before accessing them
//   const title = document.getElementById("title");
//   const numberInput = document.getElementById("numberInput");
//   const factButton = document.getElementById("mainButton");
//   const loading = document.getElementById("loading");
//   const factContainer = document.getElementById("factContainer");
//   const factText = document.getElementById("factText");
//   const factImage = document.getElementById("factImage");
//   const container = document.querySelector(".container");
//   const leftImage = document.querySelector("#leftDiv img");

//   if (
//     title &&
//     numberInput &&
//     factButton &&
//     loading &&
//     factContainer &&
//     factText &&
//     factImage &&
//     container &&
//     leftImage
//   ) {
//     // Hide the title, input, and button
//     title.style.display = "none";
//     numberInput.style.display = "none";
//     factButton.style.display = "none";

//     // Show the loading element
//     loading.style.display = "flex";
//     // Hide the fact container
//     factContainer.style.display = "none";

//     // Wait for 3 seconds
//     await new Promise((resolve) => setTimeout(resolve, 3000));

//     // Change the left image to wizard2.png
//     leftImage.src = "images/wizard2.png";

//     const numberValue = numberInput.value;
//     if (numberValue) {
//       const response = await fetch("facts.json");
//       const facts = await response.json();
//       let fact;

//       if (numberValue % 2 === 0) {
//         // Input is even, pick a random fact from 10 to 19
//         const evenIndex = Math.floor(Math.random() * 10) + 10;
//         fact = facts[evenIndex];
//       } else {
//         // Input is odd, pick a random fact from 0 to 9
//         const oddIndex = Math.floor(Math.random() * 10);
//         fact = facts[oddIndex];
//       }

//       factText.innerText = fact.fact;
//       factImage.src = fact.image;

//       // Hide the loading element
//       loading.style.display = "none";
//       // Show the fact container
//       factContainer.style.display = "block";
//       // Add the animated border class to the container
//       container.classList.add("animated-border");
//     } else {
//       // If no number is entered, show the elements again
//       title.style.display = "block";
//       numberInput.style.display = "block";
//       factButton.style.display = "inline-block";
//       loading.style.display = "none";
//     }
//   } else {
//     console.error("One or more elements are missing in the DOM.");
//   }
// }

// function resetScreen() {
//   const title = document.getElementById("title");
//   const numberInput = document.getElementById("numberInput");
//   const factButton = document.getElementById("mainButton");
//   const factContainer = document.getElementById("factContainer");
//   const factText = document.getElementById("factText");
//   const factImage = document.getElementById("factImage");
//   const container = document.querySelector(".container");
//   const leftImage = document.querySelector("#leftDiv img");

//   if (
//     title &&
//     numberInput &&
//     factButton &&
//     factContainer &&
//     factText &&
//     factImage &&
//     container &&
//     leftImage
//   ) {
//     // Clear the input field
//     numberInput.value = "";
//     // Hide the fact container
//     factContainer.style.display = "none";
//     // Clear the fact text and image
//     factText.innerText = "";
//     factImage.src = "";

//     // Show the title, input, and button
//     title.style.display = "block";
//     numberInput.style.display = "block";
//     factButton.style.display = "inline-block";
//     // Remove the animated border class from the container
//     container.classList.remove("animated-border");
//     // Change the left image back to wizard1.png
//     leftImage.src = "images/wizard1.png";

//     // Set focus back on the input field
//     numberInput.focus();
//   } else {
//     console.error("One or more elements are missing in the DOM.");
//   }
// }

// function validateInput(input) {
//   // Remove non-numeric characters and limit input to one digit
//   input.value = input.value.replace(/[^0-9]/g, "").slice(0, 1);
// }

document.addEventListener("DOMContentLoaded", function () {
  // Set focus on the input field when the page loads
  const numberInput = document.getElementById("numberInput");
  numberInput.focus();

  // Load and play background music
  const backgroundMusic = new Audio("sounds/background.mp3");
  backgroundMusic.loop = true;
  // backgroundMusic.volume = 0.8; // Set low volume
  // backgroundMusic.play().catch((err) => console.warn("Autoplay blocked:", err));

  // Add event listener for the Enter key and ShiftRight key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      document.getElementById("mainButton").click();
    } else if (event.code === "ShiftRight") {
      document.getElementById("floatingButton").click();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Set focus on the input field when the page loads
  const numberInput = document.getElementById("numberInput");
  numberInput.focus();

  // Load background music
  const backgroundMusic = new Audio("sounds/background.mp3");
  backgroundMusic.loop = true;
  backgroundMusic.volume = 0.1;

  // Button to start/stop the music
  const toggleSoundButton = document.getElementById("toggleSound");

  toggleSoundButton.addEventListener("click", function () {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
      toggleSoundButton.innerText = "🔇";
    } else {
      backgroundMusic.pause();
      toggleSoundButton.innerText = "🔊";
    }
  });

  // Add event listener for the Enter key and ShiftRight key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      document.getElementById("mainButton").click();
    } else if (event.code === "ShiftRight") {
      document.getElementById("floatingButton").click();
    }
  });
});

async function showFact() {
  // Ensure elements exist before accessing them
  const title = document.getElementById("title");
  const numberInput = document.getElementById("numberInput");
  const factButton = document.getElementById("mainButton");
  const loading = document.getElementById("loading");
  const factContainer = document.getElementById("factContainer");
  const factText = document.getElementById("factText");
  const factImage = document.getElementById("factImage");
  const container = document.querySelector(".container");
  const leftImage = document.querySelector("#leftDiv img");

  // Load sounds
  const submitSound = new Audio("sounds/submit.mp3");
  const factSound = new Audio("sounds/fact.mp3");

  if (
    title &&
    numberInput &&
    factButton &&
    loading &&
    factContainer &&
    factText &&
    factImage &&
    container &&
    leftImage
  ) {
    // Play the submit sound
    submitSound.play();

    // Hide the title, input, and button
    title.style.display = "none";
    numberInput.style.display = "none";
    factButton.style.display = "none";

    // Show the loading element
    loading.style.display = "flex";
    // Hide the fact container
    factContainer.style.display = "none";

    // Wait for 3 seconds
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Change the left image to wizard2.png
    leftImage.src = "images/wizard2.png";

    const numberValue = numberInput.value;
    if (numberValue) {
      const response = await fetch("facts.json");
      const facts = await response.json();
      let fact;

      if (numberValue % 2 === 0) {
        // Input is even, pick a random fact from 10 to 19
        const evenIndex = Math.floor(Math.random() * 10) + 10;
        fact = facts[evenIndex];
      } else {
        // Input is odd, pick a random fact from 0 to 9
        const oddIndex = Math.floor(Math.random() * 10);
        fact = facts[oddIndex];
      }

      factText.innerText = fact.fact;
      factImage.src = fact.image;

      // Hide the loading element
      loading.style.display = "none";
      // Show the fact container
      factContainer.style.display = "block";
      // Add the animated border class to the container
      container.classList.add("animated-border");

      // Play fact reveal sound
      factSound.play();
    } else {
      // If no number is entered, show the elements again
      title.style.display = "block";
      numberInput.style.display = "block";
      factButton.style.display = "inline-block";
      loading.style.display = "none";
    }
  } else {
    console.error("One or more elements are missing in the DOM.");
  }
}

function resetScreen() {
  const title = document.getElementById("title");
  const numberInput = document.getElementById("numberInput");
  const factButton = document.getElementById("mainButton");
  const factContainer = document.getElementById("factContainer");
  const factText = document.getElementById("factText");
  const factImage = document.getElementById("factImage");
  const container = document.querySelector(".container");
  const leftImage = document.querySelector("#leftDiv img");

  // Load reset sound
  const resetSound = new Audio("sounds/reset.mp3");

  if (
    title &&
    numberInput &&
    factButton &&
    factContainer &&
    factText &&
    factImage &&
    container &&
    leftImage
  ) {
    // Play reset sound
    resetSound.play();

    // Clear the input field
    numberInput.value = "";
    // Hide the fact container
    factContainer.style.display = "none";
    // Clear the fact text and image
    factText.innerText = "";
    factImage.src = "";

    // Show the title, input, and button
    title.style.display = "block";
    numberInput.style.display = "block";
    factButton.style.display = "inline-block";
    // Remove the animated border class from the container
    container.classList.remove("animated-border");
    // Change the left image back to wizard1.png
    leftImage.src = "images/wizard1.png";

    // Set focus back on the input field
    numberInput.focus();
  } else {
    console.error("One or more elements are missing in the DOM.");
  }
}

function validateInput(input) {
  // Remove non-numeric characters and limit input to one digit
  input.value = input.value.replace(/[^0-9]/g, "").slice(0, 1);
}
