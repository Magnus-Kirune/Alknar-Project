const regent = require('fs')

export function register(){
    const alknar = document.getElementById('alknar-sistem')
     alknar.innerHTML = `
    <form id="cadastroForm">
       <input type="text" id="nome" placeholder="Nome" required>
       <input type="password" id="senha" placeholder="Senha" required>
       <input type="text" id="serie" placeholder="Série (ADM/Colaborador)" required>
       <button type="submit">Cadastrar</button>
    </form>`
}
