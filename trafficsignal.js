const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");
const startBtn = document.getElementById("startBtn");

function offLights() {
    red.classList.remove("active");
    yellow.classList.remove("active");
    green.classList.remove("active");
}

function startSignal() {

    offLights();
    red.classList.add("active");

    setTimeout(() => {
        offLights();
        yellow.classList.add("active");
    }, 3000);

    setTimeout(() => {
        offLights();
        green.classList.add("active");
    }, 5000);

    setTimeout(() => {
        startSignal(); 
    }, 8000);
}

startBtn.addEventListener("click", startSignal);