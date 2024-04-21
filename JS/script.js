const myRoles = document.querySelector('#my-roles p');
const flipCard = document.querySelector('.img-container');
const acc = document.getElementsByClassName("accordion");
const slider = document.querySelector('.project-wrapper');
const cards = document.querySelectorAll('.project');
const topBtn = document.getElementById("topBtn");
const cardWidth = cards[0].offsetWidth;
const roles = [
    'full stack developer',
    'graphic designer',
    'mobile app developer',
    'UI/UX designer',
    'coding instructor',
    'girl with big dreams'
]

// Role Iteration
myRoles.innerHTML = roles[0];
let roleIndex = 0;

const intervalId = setInterval(() => {
    if (roleIndex < roles.length) {
        myRoles.innerHTML = roles[roleIndex]
        roleIndex++;
    } else {
        roleIndex = 0
    }
}, 4000);

document.querySelector('#my-roles').addEventListener('click', () =>{
    const index = roles.indexOf(myRoles.innerText);
})

// Nav menu select
function scrollToDiv(divId) {
    const targetElement = document.getElementById(`${divId}`);
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Flip card
flipCard.addEventListener('click', () => {
  flipCard.classList.toggle('flip-tap');
  }
)

// Skills Accordion
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    this.classList.toggle('active');
    let panel = this.nextElementSibling;
    const accIcon = this.getElementsByTagName('div')[0];
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      accIcon.style.transform = 'rotate(0deg)';
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
      accIcon.style.transform = 'rotate(90deg)';
    }
    
  });
}

// Projects
function highlight(project) {
  let projects = document.querySelectorAll(".project");
  projects.forEach((pr) => {
    if (pr !== project) {
      pr.classList.remove('active');
    }
  })
  project.classList.add('active');
}
function next() {
  slider.scrollLeft += cardWidth;
}
function prev() {
  slider.scrollLeft -= cardWidth;
}

// Scroll to top button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
