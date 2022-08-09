const image = document.getElementById("r-image");
const name1 = document.getElementById("name1");
const info1 = document.getElementById("info1");
const age1 = document.getElementById("age");
const email1 = document.getElementById("email");
const phone1 = document.getElementById("phone");
const next = document.getElementById("getUser");
const btns = document.querySelectorAll('.icon');

const getUser = async function getRandomUser() {
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json();
    const user = data.results[0];
    image.src = user.picture.large;
    name1.innerText = `${user.name.first} ${user.name.last}`;
    const { dob: {age},} = user;
    const { phone, email} = user;
    return{
        age,email,phone
    };
}

const showUser = async () => {
    info1.innerText='';
    const user = await getUser();
    displayUser(user);
}
window.addEventListener('load',showUser);
next.addEventListener('click',showUser);

const displayUser = (user) => {
    btns.forEach((btns) => {
        const label = btns.dataset.attr;
        btns.addEventListener('click',()=>{
            info1.innerText = user[label];
        })
    });
}