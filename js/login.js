const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginText = document.querySelector("#login-text");

const HIDDEN_CLASSNAME1 = "hidden"; //string만 포함된 변수는 대문자
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); //form 기본 동작(submit) 실행 X
  loginForm.classList.add(HIDDEN_CLASSNAME1);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintLogin(username);
}

function paintLogin(username) {
  loginText.innerText = `Hello, ${username}.`;
  loginText.classList.remove(HIDDEN_CLASSNAME1);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME1);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintLogin(savedUsername);
}
