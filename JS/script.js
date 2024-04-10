const myRoles = document.querySelector('#my-roles p');
const acc = document.getElementsByClassName("accordion");
const roles = [
    'full stack developer',
    'graphic designer',
    'mobile app developer',
    'UI/UX designer',
    'coding instructor',
    'girl with big dreams'
]

myRoles.innerHTML = roles[0]

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

function scrollToDiv(divId) {
    const targetElement = document.getElementById(`${divId}`);
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    const accIcon = this.getElementsByTagName('div')[0];
    console.log(this);
    console.log(accIcon);
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      accIcon.style.transform = "rotate(0deg)";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      accIcon.style.transform = "rotate(90deg)";
    }
    
  });
}
  