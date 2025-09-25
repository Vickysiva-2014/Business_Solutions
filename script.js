


  // window.addEventListener("load", () => {
  //   // Small delay for animation effect
  //   setTimeout(() => {
  //     // Hide loader
  //     document.getElementById("loader-wrapper").style.display = "none";

  //     // Animate reveal panels
  //     document.querySelectorAll(".reveal").forEach(panel => {
  //       panel.classList.add("hide");
  //     });

  //     // Show main content
  //     document.getElementById("main-content").style.display = "block";

  //     // Remove loading class from body
  //     document.body.classList.remove("loading");
  //   }, 800); // adjust delay as you like
  // });


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


(function(){
  const wrap = document.querySelector('.testi-wrap');
  const items = Array.from(wrap.querySelectorAll('.client-single'));
  let lastIndex = items.findIndex(el=>el.classList.contains('active'));
  if(lastIndex < 0) lastIndex = 0;
  let rotateInterval = 6000;
  let timer = null;

  function pickRandomDifferent(){
    let idx = Math.floor(Math.random()*items.length);
    while(idx===lastIndex && items.length>1){idx = Math.floor(Math.random()*items.length)}
    return idx;
  }
  function activateIndex(newIndex){
    if(newIndex === lastIndex) return;
    const prev = items[lastIndex];
    const next = items[newIndex];
    const prevPos = prev.getAttribute('data-position');
    const nextPos = next.getAttribute('data-position');
    prev.classList.remove('active'); prev.classList.add('inactive');
    prev.classList.remove(prevPos); prev.classList.add(nextPos); prev.setAttribute('data-position', nextPos);
    next.classList.remove('inactive'); next.classList.add('active');
    next.classList.remove(nextPos); next.classList.add(prevPos); next.setAttribute('data-position', prevPos);
    lastIndex = newIndex;
  }
  function startTimer(){
    stopTimer();
    timer = setInterval(()=>{
      const idx = pickRandomDifferent();
      activateIndex(idx);
    }, rotateInterval);
  }
  function stopTimer(){ if(timer) clearInterval(timer); }

  startTimer();

  items.forEach((el, idx)=>{
    el.addEventListener('click', e=>{e.preventDefault();activateIndex(idx);startTimer();});
    el.setAttribute('tabindex','0');
    el.addEventListener('keydown', ev=>{if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();activateIndex(idx);startTimer();}});
  });
})();


var swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });

