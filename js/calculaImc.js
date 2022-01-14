/*
Procurando as variáveis de peso e altura através do seletor de CSS
Isto serve para fazermos o cálculo do IMC do paciente automaticamente
document.querySelectorAll(".paciente") -> Procura todos os pacientes
*/

//Selecionando todos os pacientes presentes na lista
var pacientes=document.querySelectorAll(".paciente");

//Percorrendo todo os pacientes da lista
for(var i=0;i<pacientes.length;i++){
    
    //Fazendo uma maneira de estar percorrendo cada um dos pacientes por suas posições respectivamente
    var paciente=pacientes[i];
    
    //Acessando as informações de peso e altura de cada um dos pacientes
    
    var peso_paciente=paciente.querySelector(".info-peso");
    var alt_paciente=paciente.querySelector(".info-altura");
    
    //****************** Pegando o conteúdo textual de cada um deles ********* //
    var peso=peso_paciente.textContent;
    var altura=alt_paciente.textContent;


    // *** Lógica para validação se peso e altura estão válidos 
    var peso_val=validaPeso(peso);
    var altura_val=validaAltura(altura);
    var imc_1=paciente.querySelector(".info-imc");

    if(!peso_val){
        console.log("Peso Inválido");
        peso_val=false;
        imc_1.textContent="Peso Inválido";
        //Caso esteja incorreto o peso do paciente esteja incorreto a linha em questão ficará vermelha para apontar o erro, chamando do CSS
        paciente.classList.add("paciente-invalido");
    }

    if(!altura_val){
        console.log("Altura Inválida");
        peso_val=false;
        imc_1.textContent="Altura Inválida";
        //Caso esteja incorreto a altura do paciente esteja incorreto a linha em questão ficará vermelha para apontar o erro, chamando do CSS
        //ClassList.add - > Adiciona uma nova classe a aquele objeto em questão permitindo manipula-lo através do CSS como convencional.
        paciente.classList.add("paciente-invalido");
        
    }

    if(peso_val && altura_val){
        // **** Cálculo do imc *****//
        imc_1.textContent=calcula_imc(peso,altura);
    }
    else{
        console.log("Impossivel calcular o imc");
        
    }
    
}
function validaPeso(peso)
{
    if(peso>=0 && peso<=1000){
        return true;
    }
    else{
        return false;
    }
}

function validaAltura(altura)
{
    if(altura>=0 && altura<=3.0)
    {
            return true;
    }
    else{
        return false;
    }
}



// **** Função que calcula imc *****//
function calcula_imc(peso,altura){
    var imc=0;
    imc=peso/(altura*altura);
    return imc.toFixed(2);
}

    
    



