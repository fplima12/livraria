window.onload=function(){

    let user= localStorage.emailUser
    let bemVindo=document.querySelector("#bemVindo")
    let entrar=document.querySelector("#entrar")
    let sair=document.querySelector("#sair")

    //console.log(user.indexOf('@'))
    //console.log(user.substring(0,user.indexOf('@')))

    function msgUser(){ // Função para ocultar link entrar quando logado.
        let nomeUser=user.substring(0,user.indexOf('@')) // Pega apenas a informação que está antes do "@" e está dentro da função, pois é quando ela existe.
        bemVindo.innerHTML='Olá <b>' + nomeUser.toUpperCase() + '!</b>'
        entrar.style.display="none"
    }

    function resetUser(){ // Função para ocultar link sair quando não estivar logado.
        sair.style.display="none"
    }

    sair.onclick=function(){ // Função que remove o usuário e reinicia a página inicial
        localStorage.removeItem('emailUser')
        location.href='index.html'
    }

    //localStorage.emailUser ? bemVindo.innerHTML='Olá ' + user : null // Montagem sem uso de função
    localStorage.emailUser ? msgUser() : resetUser() // Ternário 'if' que verifica o entrar e sair.

}