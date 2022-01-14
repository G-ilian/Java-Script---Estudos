// ** JS Reponsável por fazer toda a filtragem dos pacientes de acordo com seus dados
var campoFiltro=document.querySelector("#filtrar-tabela"); //Selecionando os dados 


// Evento de input indica que algo está sendo digitado na casa de pesquisa
campoFiltro.addEventListener("input",function(){
    
    var input=this.value;//Armazena os valores digitados na aba de pesquisa
    var listaPacientes=document.querySelectorAll(".paciente");//Lista com o nome de todos os pacientes
    
    //For que percorre toda a lista de pacientes para verificar o nome dos mesmos
    if(input.length>0){
        for(var i=0;i<listaPacientes.length;i++){         
        
            //Variavel auxiliar para facilitar acesso a lista
            var pacientes=listaPacientes[i];
        
            //Buscando o nome dos pacientes dentro da lista 
            var tdNome=pacientes.querySelector(".info-nome");
        
            //Passando o nome do paciente encontrado para uma nova variável
            var nome=tdNome.textContent;
            
            //Criando uma regex para verificar todos os caracteres do nome
            var reg=new RegExp(input,"i");
        
            if(!(reg.test(nome)))
                pacientes.classList.add("esconder-paciente");
            else{
                pacientes.classList.remove("esconder-paciente");
                
                }
                
        
        }
        
    }
    
    else{
        for(var j=0;j<listaPacientes.length;j++){
            var paciente=listaPacientes[j];
            paciente.classList.remove("esconder-paciente");
            
            }
                
        
        }   
   
});