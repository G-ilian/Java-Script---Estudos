///** SCRIPT RESPONSÁVEL POR FAZER A REMOÇÃO DOS PACIENTES PRESENTES NA TABELA **
var tabela=document.querySelector("table");//Buscando todos os elementos que estão na minha tabela

// Percorrendo todas as posições da tabela para pode excluir um paciente especifico
//Adicionando evento para informar que o duplo click sinaliza a remoção do evento

tabela.addEventListener("dblclick",function(event){
    //Event -> Objeto que indica qual dos filhos "alvos"(Dados) foi clicado na tabela
    var alvo=event.target;//Td -> Dados da tabela
    
    //ParentNode-> Permite ter acesso ao pai cujo filho sofreu o evento
    var paiDoAlvo=alvo.parentNode // Tr -> Paciente com todos os dados
    
    //Adicionando a classe de fadeOut para que a remoção seja mais lenta e gradual
    paiDoAlvo.classList.add("fadeOut");
    
    setTimeout(function(){
        //Eliminando o paciente que foi alvo do click
        paiDoAlvo.remove();    
    },500);
  
});
