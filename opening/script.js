// Ensure the DOM is fully loaded before executing scripts
document.addEventListener("DOMContentLoaded", function () {
  
  // Random pop-ups every 5 seconds
  setInterval(function () {
    alert("This pop-up has no purpose. Seriously.");
  }, 5000);

  // Useless button click event
  const uselessButton = document.querySelector('.useless-button');
  if (uselessButton) {
    uselessButton.addEventListener('click', function () {
      window.location.href = "/public"
    });
  }

  // "Click Me" button redirecting to public/index.html
  const clickMeButton = document.querySelector('.click-me');
  if (clickMeButton) {
    clickMeButton.addEventListener('click', function () {
      window.location.href = "/workspaces/Meme-Cart/public/index.html"; // Redirect to public/index.html
    });
  }

  // Randomly move elements for no reason
  const elementsToMove = document.querySelectorAll('h1, .useless-button, .nonsense');
  setInterval(function () {
    elementsToMove.forEach(element => {
      const randomX = Math.floor(Math.random() * 300) - 150;
      const randomY = Math.floor(Math.random() * 300) - 150;
      element.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
  }, 1000);

  // Music that randomly changes
  const audio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
  audio.loop = true;
  audio.play().catch(error => console.log("Autoplay failed:", error));

  setInterval(function () {
    audio.pause(); // Pause current track
    audio.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3";
    audio.load(); // Reload new track
    audio.play().catch(error => console.log("Autoplay failed:", error));
  }, 10000);

});