let teams = [
    {
        id: 1,
        img:"F77mq4uXoAAhUqU.jpeg",
        name: "Abo obida",
        job: "WEB DEVELOPER",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold- pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        img:"F718OgWXAAA2rD5.jpeg",
        name: "Someone",
        job: "WEB DESIGNER",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        img: "IMG20231004180044.jpg",
        name: "Gehad",
        job: "THE BOSS",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm- to - table schlitz, edison bulb pop - up 3 wolf moon tote bag street art shabby chic.",
    }
]

let img = document.querySelector(".img")
let name = document.querySelector(".name")
let job = document.querySelector(".job")
let text = document.querySelector(".text")
let chooseR = document.querySelector(".right")
let chooseL = document.querySelector(".left")
let btn = document.querySelector(".btn")


let current = 0;

window.addEventListener('DOMContentLoaded', function () {
    const item = teams[current];
    img.src = item.img;
    name.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
});


function show(person) {
    const item = teams[person];
    img.src = item.img;
    name.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
}

chooseR.addEventListener("click", function () {
    current++;
    if (current > teams.length - 1) {
        current = 0;
    }
    show(current)
})
chooseL.addEventListener("click", function () {
    current--;
    if (current < 0) {
        current = teams.length - 1;
    }
    show(current)
})
btn.addEventListener("click", function () {
    current = Math.floor(Math.random() * teams.length)
    show(current)
})