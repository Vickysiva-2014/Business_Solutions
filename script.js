
  const bubbleContainer = document.querySelector(".bubble-container");

  for (let i = 0; i < 12; i++) {   // reduced bubble count
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    // random size
    const size = Math.random() * 50 + 20; // 20px – 70px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // random horizontal position
    bubble.style.left = `${Math.random() * 100}%`;

    // random speed
    bubble.style.animationDuration = `${Math.random() * 10 + 8}s`;

    // random delay
    bubble.style.animationDelay = `${Math.random() * 5}s`;

    bubbleContainer.appendChild(bubble);
  }


window.addEventListener("load", function() {
  const loaderWrapper = document.getElementById("loader-wrapper");
  const mainContent = document.getElementById("main-content");
  const panels = document.querySelectorAll(".reveal");

  // Loader duration
  const loaderDuration = 3000; 
  // Delay after loader ends before split animation
  const splitDelay = 200;      

  // Step 1: run loader for X sec
  setTimeout(() => {
    loaderWrapper.style.display = "none";

    // Step 2: show content immediately behind panels
    mainContent.style.display = "block";
    document.body.classList.remove("loading");

    // Step 3: after small delay, trigger split animation
    setTimeout(() => {
      panels.forEach((panel, i) => {
        setTimeout(() => {
          panel.classList.add("hide");
        }, i * 150); // stagger effect
      });

      // Step 4: remove panels from DOM after animation
      setTimeout(() => {
        panels.forEach(p => p.remove());
      }, 1500);

    }, splitDelay);

  }, loaderDuration);
});



/* JS: add a small stagger (and start animations reliably) */
document.addEventListener('DOMContentLoaded', function () {
  const letters = document.querySelectorAll('.center h1 span');
  const stagger = 0.03; // seconds between letters — tweak to taste

  letters.forEach((span, i) => {
    span.style.animationDelay = (i * stagger) + 's';
    // start the animation (it was paused initially)
    span.style.animationPlayState = 'running';
  });
});


  const cursorDot = document.querySelector(".cursor-dot");
  const cursorCircle = document.querySelector(".cursor-circle");

  document.addEventListener("mousemove", (e) => {
    const { clientX: x, clientY: y } = e;
    cursorDot.style.left = `${x}px`;
    cursorDot.style.top = `${y}px`;
    cursorCircle.style.left = `${x}px`;
    cursorCircle.style.top = `${y}px`;
  });

  // Optional: small "click pulse"
  document.addEventListener("click", () => {
    cursorCircle.style.transform = "translate(-50%, -50%) scale(0.8)";
    setTimeout(() => {
      cursorCircle.style.transform = "translate(-50%, -50%) scale(1)";
    }, 150);
  });

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  let started = false; // to prevent multiple triggers

  const animateCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const increment = target / 200; // adjust speed here

    const update = () => {
      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count).toLocaleString();
        requestAnimationFrame(update);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };

    update();
  };

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
          counters.forEach(counter => animateCounter(counter));
          started = true;
          observer.disconnect(); // stop observing after animation
        }
      });
    },
    { threshold: 0.5 } // trigger when 50% of section is visible
  );

  const counterSection = document.querySelector(".counter-section");
  if (counterSection) observer.observe(counterSection);
});


// Automatically toggle card colors every 3 seconds
setInterval(() => {
  document.querySelectorAll(".card").forEach(card => {
    card.classList.toggle("style1");
    card.classList.toggle("style2");
  });
}, 3000);


