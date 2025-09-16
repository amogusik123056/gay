const loginInput = document.getElementById("login")
const passwordInput = document.getElementById("password")
const checkButton = document.getElementById("check")
const message = document.getElementById("message")
const log = document.getElementById("log")
const pass = document.getElementById("pass")
const reg = document.getElementById("reg")


let logaftreg = ""
let passaftreg = ""
reg.addEventListener ("click", () => {
    logaftreg = log.value
    passaftreg = pass.value
})  

checkButton.addEventListener("click", () => {
  
  let login = loginInput.value
  const password = passwordInput.value

  if ((login === "admin" && password === "12345")||
     (login === "kirill" && password === "54321")||
     (login === "lev" && password === "smolkin")||
     (login == logaftreg && password == passaftreg)){
    
    message.textContent = "Добро пожаловать, " + login + "!"
    message.style.color = "green"
  } 
  else {
    message.textContent = "Неверный логин или пароль!"
    message.style.color = "red"
  }
})
