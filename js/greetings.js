const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.getElementById("greeting");
const todo = document.querySelector(".todo");
const login = document.querySelector(".login");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username";

//로컬 스토리지에 값이 null이면 실행
function onLoginSubmit(ev){
    const userName = loginInput.value;
    ev.preventDefault();
    login.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,userName);
    paintGreetings(userName);
}

//로컬 스토리지에 값이 null이 아니라면
function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello, ${username}`;
    todo.classList.remove(HIDDEN_CLASSNAME);
}

//로컬 스토리지 확인
const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    login.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}