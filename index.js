const text = "Web Developer";
let index = 0;
let isDeleting = false;

function type() {
  const element = document.getElementById("typewriter");

  if (isDeleting) {
    index--;
  } else {
    index++;
  }

  element.textContent = text.substring(0, index);

  if (!isDeleting && index === text.length) {
    setTimeout(() => {
      isDeleting = true;
    }, 1000); // Pause before deleting
  } else if (isDeleting && index === 0) {
    isDeleting = false;
  }

  setTimeout(type, isDeleting ? 50 : 150);
}

document.addEventListener("DOMContentLoaded", type);

document.addEventListener("DOMContentLoaded", () => {
  const bootText = document.getElementById("boot-text");
  const messages = [
    "Booting KWEKU'S PORTFOLIO...",
    "Loading assets...",
    "Setting up terminal UI...",
    "Verifying User IP Address ...",
    "Launch sequence complete ✔",
    "Welcome To Kweku's Portfolio."
  ];

  let index = 0;

  const typeLine = () => {
    if (index < messages.length) {
      bootText.textContent += `\n${messages[index]}`;
      index++;
      setTimeout(typeLine, 900);
    } else {
      // After boot, fade out
      setTimeout(() => {
        const bootScreen = document.getElementById("boot-screen");
        bootScreen.style.opacity = '0';
        bootScreen.style.transition = 'opacity 1s ease-in-out';
        setTimeout(() => bootScreen.style.display = 'none', 1000);
      }, 1000);
    }
  };

  typeLine();
});


