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
    if (logaftreg == "") {
        alert ("вы не ввели логин или пароль")
    }
    else if (passaftreg == "") {
      alert ("вы не ввели логин или пароль")  
    }
    else { 
        alert("регистрация прошла успешно!")
    }
})  

checkButton.addEventListener("click", () => {
  
  let login = loginInput.value
  const password = passwordInput.value

  if ((login === "admin" && password === "12345")||
     (login === "kirill" && password === "54321")||
     (login === "lev" && password === "smolkin")||
     (login == logaftreg && password == passaftreg)){
            if (passwordInput == "") {
        alert ("вы не ввели логин или пароль")
    }
    else if (login == "") {
      alert ("вы не ввели логин или пароль")  
    }
    else if (login || passwordInput !="" ) { 
    
    
    message.textContent = "Добро пожаловать, " + login + "!"
    message.style.color = "green"
  } 
  else if (loginInput || passwordInput !=login || password ) {
    message.textContent = "Неверный логин или пароль!"
    message.style.color = "red"
  }
     } // я хз почему не работает(((((
})
