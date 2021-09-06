const clock = document.querySelector("h1#clock");

function getClock() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String((date.getMonth()+1)).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    const button = document.createElement("button");
    button.innerText = "change colors";
    clock.appendChild(button);
    button.addEventListener("click", clockColor);
}

getClock();
setInterval(getClock, 1000);

function clockColor() {
    clock.style.color = "#" + Math.floor(Math.random()*16099753).toString(16);    
}
/*
clockColor();
setInterval(clockColor, 1000);
*/


