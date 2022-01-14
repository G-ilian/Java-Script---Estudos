// *** FAZENDO UMA REQUISIÇÃO A UM SERVIDOR EXTERNO PARA IMPORTAR PACIENTES AUTOMATICAMENTE.

var btoBuscar=document.querySelector("#buscar-paciente");

btoBuscar.addEventListener("click",function(){
    //XMLHttpRequest()-> Responsável por fazer requisições de HTTP
    var xhr=new XMLHttpRequest();
    
    //Configurando o xhr para fazer as requisições como eu desejo
    
    //Abrindo requisição
    xhr.open("GET","http://api-pacientes.herokuapp.com/pacientes");
    
    //Obtendo a resposta do que foi requisitado
    xhr.addEventListener("load",function(){
        //Verificando se não houve erros na requisição
        //1. Ocorreu tudo bem com a requisição -> GET == 200
        if(xhr.status==200){
            //Captura todos os dados obtidos a partir do JS
            var resposta=xhr.responseText;
            //Abrindo o JSON, através de um array de objetos
            var pacientes=JSON.parse(resposta);
        
            //Adicionando pacientes na tabela
            for(var i=0;i<pacientes.length;i++){
                var paciente=pacientes[i];
                adicionaPacienteNaTabela(paciente);
            }
        }
        else{
            console.log(xhr.status);
            console.log(xhr.responseText);  
            var erroAjax=document.querySelector("#erro-ajax");
            erroAjax.classList.remove("esconder-paciente");
        }
    
    });
    
    //Enviando a requisição
    xhr.send();
    

});