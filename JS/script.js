const myRoles = document.querySelector('#my-roles p');

const roles = [
    'full stack developer',
    'graphic designer',
    'mobile app developer',
    'UI/UX designer',
    'coding instructor',
    'artist',
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
  