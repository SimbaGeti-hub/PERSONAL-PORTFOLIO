// Utility: throttle
function throttle(fn, wait = 100){
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= wait){
      last = now;
      fn(...args);
    }
  }
}

// Typewriter
const roles = ["Full-stack Developer", "UI/UX Enthusiast", "Performance Nerd", "Problem Solver", "Graphic Designer"];
let rIndex = 0, cIndex = 0, deleting = false;
function typeLoop(){
  const el = document.getElementById("typewriter");
  const word = roles[rIndex];
  el.textContent = word.slice(0, cIndex);
  if(!deleting && cIndex < word.length){ cIndex++; setTimeout(typeLoop, 90); }
  else if(deleting && cIndex > 0){ cIndex--; setTimeout(typeLoop, 40); }
  else{ deleting = !deleting; if(!deleting){ rIndex = (rIndex+1)%roles.length; } setTimeout(typeLoop, 700); }
}
typeLoop();

// Mobile nav
const toggle = document.querySelector(".nav__toggle");
const menu = document.getElementById("nav-menu");
toggle?.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

// Smooth scroll + close mobile menu on click
document.querySelectorAll('.nav__link').forEach(a => {
  a.addEventListener('click', () => {
    if(menu.classList.contains('open')){
      menu.classList.remove('open');
      toggle.setAttribute("aria-expanded", "false");
    }
  });
});

// Scrollspy
const sections = [...document.querySelectorAll('section[id]')];
const navLinks = [...document.querySelectorAll('.nav__link')];
function setActiveLink(){
  const fromTop = window.scrollY + 140;
  let currentId = sections[0].id;
  for(const sec of sections){
    if(fromTop >= sec.offsetTop) currentId = sec.id;
  }
  navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + currentId));
}
window.addEventListener('scroll', throttle(setActiveLink, 100));
setActiveLink();

// Reveal on scroll
const revealEls = document.querySelectorAll('.section .container, .card, .skill, .timeline__item, .form, .hero__copy, .hero__image-wrap');
revealEls.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});
revealEls.forEach(el => io.observe(el));



// Skills bars animate when visible


// const skillBars = document.querySelectorAll('.skill__bar span');
// const ioSkills = new IntersectionObserver((entries)=>{
//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//       const el = entry.target;
//       const pct = el.dataset.percent || 0;
//       requestAnimationFrame(()=>{ el.style.width = pct + '%'; });
//       ioSkills.unobserve(el);
//     }
//   });
// }, {threshold: 0.5});
// skillBars.forEach(el => ioSkills.observe(el));










// const skillBars = document.querySelectorAll('.skill');

// const ioSkills = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       const bar = entry.target.querySelector('.skill__bar span');
//       const val = entry.target.querySelector('.skill__val');
//       const pct = parseInt(bar.dataset.percent) || 0;

//       // Animate bar width
//       const duration = 1500; // ms (same for bar + number)
//       bar.style.transition = `width ${duration}ms ease-in-out`;
//       requestAnimationFrame(() => {
//         bar.style.width = pct + '%';
//       });

//       // Animate number count-up with requestAnimationFrame
//       let startTime = null;

//       function animateNumber(timestamp) {
//         if (!startTime) startTime = timestamp;
//         const progress = Math.min((timestamp - startTime) / duration, 1);
//         const current = Math.floor(progress * pct);
//         val.textContent = current + "%";

//         if (progress < 1) {
//           requestAnimationFrame(animateNumber);
//         }
//       }

//       requestAnimationFrame(animateNumber);

//       ioSkills.unobserve(entry.target); // run once
//     }
//   });
// }, { threshold: 0.5 });

// skillBars.forEach(el => ioSkills.observe(el));





// const skillBars = document.querySelectorAll('.skill');

// function animateSkill(skill) {
//   const bar = skill.querySelector('.skill__bar span');
//   const val = skill.querySelector('.skill__val');
//   const pct = parseInt(bar.dataset.percent) || 0;
//   const duration = 1500;

//   // Reset bar and number to 0 before animating
//   bar.style.transition = `width ${duration}ms ease-in-out`;
//   bar.style.width = '0%';
//   val.textContent = '0%';

//   // Animate bar
//   requestAnimationFrame(() => {
//     bar.style.width = pct + '%';
//   });

//   // Animate number
//   let startTime = null;
//   function animateNumber(timestamp) {
//     if (!startTime) startTime = timestamp;
//     const progress = Math.min((timestamp - startTime) / duration, 1);
//     const current = Math.floor(progress * pct);
//     val.textContent = current + '%';
//     if (progress < 1) requestAnimationFrame(animateNumber);
//   }
//   requestAnimationFrame(animateNumber);
// }

// // Animate on scroll using IntersectionObserver
// const ioSkills = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       animateSkill(entry.target);
//     }
//   });
// }, { threshold: 0.5 });

// skillBars.forEach(skill => {
//   ioSkills.observe(skill);

//   // Animate on hover
//   skill.addEventListener('mouseenter', () => animateSkill(skill));
// });



// const skillBars = document.querySelectorAll('.skill');

// function animateSkill(skill) {
//   const bar = skill.querySelector('.skill__bar span');
//   const val = skill.querySelector('.skill__val');
//   const pct = parseInt(bar.dataset.percent) || 0;
//   const duration = 1500;

//   // Reset bar and number to 0 before animating
//   bar.style.transition = `width ${duration}ms ease-in-out`;
//   bar.style.width = '0%';
//   val.textContent = '0%';

//   // Animate bar
//   requestAnimationFrame(() => {
//     bar.style.width = pct + '%';
//   });

//   // Animate number
//   let startTime = null;
//   function animateNumber(timestamp) {
//     if (!startTime) startTime = timestamp;
//     const progress = Math.min((timestamp - startTime) / duration, 1);
//     const current = Math.floor(progress * pct);
//     val.textContent = current + '%';
//     if (progress < 1) requestAnimationFrame(animateNumber);
//   }
//   requestAnimationFrame(animateNumber);
// }

// // Animate on scroll using IntersectionObserver
// const ioSkills = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       animateSkill(entry.target);
//     } else {
//       // Reset the bar and number when leaving the viewport
//       const bar = entry.target.querySelector('.skill__bar span');
//       const val = entry.target.querySelector('.skill__val');
//       bar.style.width = '0%';
//       val.textContent = '0%';
//     }
//   });
// }, { threshold: 0.5 });

// skillBars.forEach(skill => {
//   ioSkills.observe(skill);

//   // Animate on hover
//   skill.addEventListener('mouseenter', () => animateSkill(skill));
// });



const skillBars = document.querySelectorAll('.skill');

function animateSkill(skill) {
  const bar = skill.querySelector('.skill__bar span');
  const val = skill.querySelector('.skill__val');
  const pct = parseInt(bar.dataset.percent) || 0;
  const duration = 1500;

  // Reset bar and number before animating
  bar.style.transition = `width ${duration}ms ease-in-out`;
  bar.style.width = '0%';
  val.textContent = '0%';

  // Animate bar
  requestAnimationFrame(() => {
    bar.style.width = pct + '%';
  });

  // Animate number
  let startTime = null;
  function animateNumber(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const current = Math.floor(progress * pct);
    val.textContent = current + '%';
    if (progress < 1) requestAnimationFrame(animateNumber);
  }
  requestAnimationFrame(animateNumber);
}

// IntersectionObserver for scroll-based animation
const ioSkills = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkill(entry.target);
    } else {
      // Reset bar and number when leaving viewport
      const bar = entry.target.querySelector('.skill__bar span');
      const val = entry.target.querySelector('.skill__val');
      bar.style.width = '0%';
      val.textContent = '0%';
    }
  });
}, { threshold: 0.5 });

// Observe each skill
skillBars.forEach(skill => {
  ioSkills.observe(skill);

  // Animate on hover
  skill.addEventListener('mouseenter', () => animateSkill(skill));
});


// linking our form to the formspree in order to receive submissions
const form1 = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  fetch(form1.action, {
    method: 'POST',
    body: new FormData(form1),
    headers: { 'Accept': 'application/json' }
  })
  .then(response => response.json())
  .then(data => console.log(data)) // Logs server response for debugging
  .catch(error => console.error('Error:', error));
});













// Projects filter
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.card');
filters.forEach(btn => {
  btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const f = btn.dataset.filter;
    cards.forEach(card => {
      const show = f === 'all' || card.classList.contains(f);
      card.style.display = show ? '' : 'none';
    });
  });
});

// Back to top


// const btt = document.getElementById('backToTop');
// function toggleBtt(){ 
//   if(window.scrollY > 5){ btt.style.opacity = 1; btt.style.transform = 'translateY(0)'; btt.style.pointerEvents = 'auto'; }
//   else{ btt.style.opacity = 0; btt.style.transform = 'translateY(10px)'; btt.style.pointerEvents = 'none'; }
// }
// window.addEventListener('scroll', throttle(toggleBtt, 80));
// btt.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
// toggleBtt();








// Form validation (basic)
const form = document.getElementById('contactForm');
form?.addEventListener('submit', (e)=>{
  e.preventDefault();
  let valid = true;
  form.querySelectorAll('input[required], textarea[required]').forEach(field => {
    const errorEl = field.parentElement.querySelector('.error');
    if(!field.value.trim()){
      valid = false;
      errorEl.textContent = 'This field is required.';
    }else if(field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)){
      valid = false;
      errorEl.textContent = 'Enter a valid email.';
    }else{
      errorEl.textContent = '';
    }
  });
  if(valid){
    alert('Thanks! Your message has been sent.');
    form.reset();
  }
});

// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();
