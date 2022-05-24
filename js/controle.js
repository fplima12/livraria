window.onload=function(){
    console.log("Hello World")
    //Caso coloque a chamada dentro do <head> use window.onload()
    //window.onload()=function(){ ...seu codigo todo aqui... }
    console.log(document.querySelector("h1")) //Verificar se existe e mostrar a tag <h1>
    //document.querySelector("h1").innerHTML="Teste" //Modifica o documento HTML
    document.querySelector("h1").innerHTML+=" :)" //Insere sem modificar o original

    //Acesso a um elemento de formulário
    console.log(document.forms.formContato)

    //Atribuindo o acesso ao formContato para a variável formC
    var formC=document.forms.formContato

    //Evento de clique no botão confirmar
    document.querySelector("#btContato").onclick=function(){
        //alert('ok')
        //alert(document.forms.formContato.nomeContato.value) //Mostra o valor dentro do campo do formulário
        //alert(document.forms.formContato.emailContato.value)
        //alert(document.forms.formContato.comentario.value)

        //alert(formC.nomeContato.value) //Utilizando o acesso com a variável formC
        //alert(formC.emailContato.value)
        //alert(formC.comentario.value)

        if(formC.nomeContato.value==""){
            alert("Preencha o nome!")
        }else if (formC.emailContato.value==""){
            alert("Preencha o e-mail!")
        }else if(formC.comentario.value==""){
            alert("Preencha o comentário!")
        }else{
            formC.submit()
        }
    }
}