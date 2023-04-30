let containerDiv = document.querySelector(".container");
let contentDiv = document.querySelector(".content-div");
let colDiv = document.createElement('div')
colDiv.className = "column";
contentDiv.appendChild(colDiv);
let array = ["start", "pause", "resume", "stop"];
array.forEach(function (e, index) {
    let button = document.createElement('button');
    button.innerText = e;
    button.className = array[index];
    colDiv.append(button);
});

function timer() {
    let date = new Date();
    let hour = date.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds();
    document.querySelector(".clock").innerText = date.toLocaleTimeString();
    console.log(hour + ":" + minutes + ":" + seconds);
}

let startbtn = document.querySelector('.start');
let pauseBtn = document.querySelector('.pause');
pauseBtn.disabled = true;
let resumeBtn = document.querySelector('.resume');
resumeBtn.disabled = true;
let stopbtn = document.querySelector('.stop');


startbtn.addEventListener("click", start);
let interval;
function start() {
    interval = setInterval(timer, 1000);
    startbtn.disabled = true;
    pauseBtn.disabled = false;
}


pauseBtn.addEventListener("click", pause);
function pause() {
    resumeBtn.disabled = false;
    clearInterval(interval);
}


resumeBtn.addEventListener("click", resume);
function resume() {
    start();
}


stopbtn.addEventListener("click", stop);
function stop() {
    clearInterval(interval);
    document.querySelector(".clock").innerText = "00:00:00";
    startbtn.disabled = false;
}

