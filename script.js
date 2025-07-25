console.log('Portfolio loaded successfully');

// Home Section Typing Animation
const roleElement = document.getElementById("animated-role");
if (roleElement) { // Only run if #animated-role exists
  const roles = ["Software Developer", "Cloud Engineer"];
  let roleIndex = 0;
  let charIndex = 0;

  function typeRole() {
    if (charIndex < roles[roleIndex].length) {
      roleElement.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeRole, 100); // typing speed
    } else {
      setTimeout(eraseRole, 2000); // pause before erasing
    }
  }

  function eraseRole() {
    if (charIndex > 0) {
      roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseRole, 50); // erasing speed
    } else {
      roleIndex = (roleIndex + 1) % roles.length; // switch role
      setTimeout(typeRole, 500);
    }
  }

  typeRole();
}

const navLinks = document.querySelectorAll("header nav a");

navLinks.forEach(link => {
  link.addEventListener("click", function() {
    navLinks.forEach(l => l.classList.remove("active")); // Remove active from all
    this.classList.add("active"); // Add active to clicked one
  });
});

// About Section Typing Animation
const dynamicText = document.querySelector(".dynamic-text");
if (dynamicText) { // Only run if .dynamic-text exists
  const words = ["Software Developer", "Cloud Engineer"];
  let wordIndex = 0;
  let aboutCharIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];
    const displayedText = currentWord.substring(0, aboutCharIndex);
    dynamicText.textContent = displayedText;

    if (!isDeleting && aboutCharIndex < currentWord.length) {
      aboutCharIndex++;
      setTimeout(typeEffect, 150);
    } else if (isDeleting && aboutCharIndex > 0) {
      aboutCharIndex--;
      setTimeout(typeEffect, 100);
    } else {
      isDeleting = !isDeleting;
      wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
      setTimeout(typeEffect, 800);
    }
  }

  typeEffect();
}

const projects = document.querySelectorAll(".project");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;

  projects.forEach(project => {
    const projectTop = project.getBoundingClientRect().top;

    if (projectTop < triggerBottom) {
      project.classList.add("show");
    } else {
      project.classList.remove("show");
    }
  });
});

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = this.name.value;
  const email = this.email.value;
  const message = this.message.value;

  const subject = encodeURIComponent("New Message from " + name);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

  window.location.href = `mailto:subramrout4543@gmail.com?subject=${subject}&body=${body}`;
});

document.querySelectorAll('.sub-skills').forEach(container => {
  const cards = container.querySelectorAll('.sub-skill-card');
  const radius = 100; // distance from center

  const angleStep = (2 * Math.PI) / cards.length;

  cards.forEach((card, index) => {
    const angle = index * angleStep;
    const x = radius * Math.cos(angle) + 'px';
    const y = radius * Math.sin(angle) + 'px';
    card.style.setProperty('--x', x);
    card.style.setProperty('--y', y);
  });
});



