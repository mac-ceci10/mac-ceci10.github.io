console.log("scripts do contato!")

/* JS INICIAL PARA CEP/ENDEREÇO */
const formulario = document.querySelector("form");
const inputCep = formulario.querySelector("#cep");
const inputTelefone = formulario.querySelector("#telefone");
const inputTelefone1 = formulario.querySelector("#telefone1");
const inputEndereco = formulario.querySelector("#endereco");
const inputBairro = formulario.querySelector("#bairro");
const inputCidade = formulario.querySelector("#cidade");
const inputEstado = formulario.querySelector("#estado");
const bStatus = formulario.querySelector("#status");
const botaoLocalizar = formulario.querySelector("#localizar-cep");



botaoLocalizar.addEventListener("click", function(event){
    event.preventDefault();

    //Entre no site: viacep.com.br
    //Pegar o cep 

    let cep = inputCep.value;  
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    // let url = "https://viacep.com.br/ws/"+{cep}+"/json/";
    console.log(url);

//1) Fazer a conexão com a API (ou acessar)

 fetch(url)

    //2) E então, recupera a resposta do acesso no formato JSON
    .then(resposta => resposta.json())


        //3) E então, mostre os dados
        .then(dados => {
            if("erro" in dados) {
                bStatus.innerHTML = "CEP não encontrado";
                inputCep.focus();

            }else{

                bStatus.innerHTML = "CEP encontrado";

                inputEndereco.value = dados.logradouro;
                inputBairro.value = dados.bairro;
                inputCidade.value = dados.localidade;
                inputEstado.value = dados.uf;
            }

            console.log(dados);
        });

});

VMasker(inputCep).maskPattern("99999-999");
VMasker(inputTelefone).maskPattern("(99) 9999-9999");
VMasker(inputTelefone).maskPattern("(99) 99999-9999");

/* Lib VanillaMasker:
 

/*Ajax: comunicação assincrona com o viaCep usando a função chamada fetch. 

pegar/acessar ou nos conectar com a API */

//concatenação ou //templeit - string

// site que pode ser conhecido como API

// WEBSERVICE - https://viacep.com.br/

// é um site para programadores 

// pegar o cep digitado no formulário

/* Pegar o cep diditado*/

// let url = "https://viacep.com.br/ws/01001000/json/";

/* json é uma mistura do objetos com array 

let x = {
    a: 

}

let cep = inputCep.value;

*/
