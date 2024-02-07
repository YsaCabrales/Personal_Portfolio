const myRoles = document.querySelector('#my-roles p');

const roles = [
    'front-end developer',
    'graphic designer',
    'software developer',
    'UI/UX designer',
    'coding instructor',
    'artist'
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

myRoles.addEventListener('click', () =>{
    const index = roles.indexOf(myRoles.innerText);
    console.log(roleIndex);
})