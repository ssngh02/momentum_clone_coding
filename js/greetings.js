const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); // 저장될 값의 이름(string 이므로 따옴표로 표시), 그리고 값
    paintGreetings(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

function paintGreetings(username) {    
    greeting.innerText = "Good "+ AmPm() + "," + ` ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    const button = document.createElement("button");
    button.innerText = "rename";
    greeting.appendChild(button);
    button.addEventListener("click", reset);  
}

function reset() {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    greeting.classList.add(HIDDEN_CLASSNAME);
    onLoginSubmit();
}

function AmPm() {
    const time = new Date().getHours();
    if (time>=5 && time<=11){
        return "Morning";
    }   
    else if (time>=12 && time<=17){
        return "Afternoon";
    }
    else if(time>=18 && time<=20){
        return "Evening";
    }
    else{
        return "Night";
    }
}
