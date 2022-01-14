//**Adicionando novos pacientes
    
var botaoAdd=document.querySelector("#adicionar-paciente");
    
//AddEventListener -> Verifica os eventos que foram feitos no botão;
    
botaoAdd.addEventListener("click",function(event){
    
    //Previne o comportamento padrão da página--> Recarregar a página
    event.preventDefault();
        
    var form=document.querySelector("#form-adiciona");
    
    //Obtendo os dados de cada um dos clientes, vindo dos formulários
    var paciente =obtemPacienteDoFormulario(form);
        
    
    //Erro pega o valor retornado de Valida Paciente
    //Serve para verificar se os dados do paciente se encontram correto
    var erros=validaPaciente(paciente);
    
    console.log(erros);
    if(!(erros.length>0)){
        adicionaPacienteNaTabela(paciente);
        //Limpando o formulário após adicionado o paciente
        form.reset();
        var mensagensErro=document.querySelector("#mensagens-erro");
        mensagensErro.innerHTML="";
    }
    else{
        exibeMensagemDeErro(erros); 
    }
    
    
});



//Função responsável por pegar os dados do cliente advindos do formulário
function obtemPacienteDoFormulario(form){
    //Criando um objeto no JS
    var paciente={
        nome:form.nome.value,
        altura:form.altura.value,
        peso:form.peso.value,
        gordura:form.gordura.value,
        imc:calcula_imc(form.peso.value,form.altura.value)
        
    }
    
    return paciente;
}

//Recebe os dados do paciente e cria uma lista Tr
function montaTr(paciente){
    
    
    //Criando um paciente dentro da lista
    var pacienteTr=document.createElement("tr");
    
    //Adicionando uma classe para que todos os elementos da lista fiquem idênticos
    pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));
    
    return pacienteTr;
}

//Função que monta cada um dos Td's para evitar redundância do código
function montaTd(dado,classe){
    var td=document.createElement("td");
    td.textContent=dado;
    td.classList.add(classe);
    
    return td; 
}

function validaPaciente(paciente){
    var erros=[];
    
    if(!validaPeso(paciente.peso))
        erros.push("Peso Inválido!!");   
    
    else if(!validaAltura(paciente.altura))
        erros.push("Altura Inválida!!"); 
    
    if(paciente.gordura.length==0)
        erros.push("O campo gordura não foi preenchido");
    if(paciente.nome.length==0)
        erros.push("O campo nome não foi preenchido");
    if(paciente.peso.length==0)
        erros.push("O campo peso não foi preenchido");
    if(paciente.altura.length==0)
        erros.push("O campo altura não foi preenchido");
    return erros;
    
}

//Função Responsável por adicionar os pacientes na tabela
function adicionaPacienteNaTabela(paciente){
    //Cria a tr do paciente
    var pacienteTr=montaTr(paciente);
    //Adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

//Função responsável por exibir as mensagens de erro
function exibeMensagemDeErro(erros){
    var ul=document.querySelector("#mensagens-erro");
    ul.innerHTML="";
    erros.forEach(function(erro){
        
        var li=document.createElement("li"); 
        li.textContent=erro;
        ul.appendChild(li);
    });
}