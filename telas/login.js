import { alknarDashboard } from "./dashboard.js"
import { registerPlayer } from "./register.js"


export function loginScreem(){
     const alknar = document.getElementById('alknar-sistem')
     alknar.innerHTML = `
   <section id="login-area">
     <h1 id="loginTittle">Login</h1>
        <form id="loginForm">
        <input type="text" placeholder="Usuário" class="alknar-input" required></br>
        <input type="password" placeholder="Senha" class="alknar-input" required></br>
        <button id="buttonLogin" type="submit">Entrar</button>
        <button id="registButton" type="button">Registrar</button>
        
      </form>
    </section>`
     

    const loginTable = document.getElementById('loginForm')
    if(loginTable){
        loginTable.addEventListener('submit' , (ev) => {
            ev.preventDefault()
            alert('Bem vindo a Alknar aventureiro!')
            alknarDashboard()
        })
    }

    const registButton = document.getElementById('registButton')
    if(registButton){
      registButton.addEventListener('click', (ev) =>{
         registerPlayer()
      })
    }else{
      alknar.innerHTML = `Erro de execução!`
    }
}


