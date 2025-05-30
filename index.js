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
