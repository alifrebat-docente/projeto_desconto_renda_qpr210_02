import {calculoDesconto} from './script_calculos.js'

//CRIAR UM ARRAY DE OBJETOS PESSOA
const pessoas = []

//PEGANDO ELEMENTOS DO DOM
const formPessoa = document.querySelector('#form-pessoa')
const divPessoa = document.querySelector('#div-lista-pessoas')

//CAPTURANDO O EVENTO DO SUBMIT DO FORMULÁRIO
formPessoa.addEventListener('submit', (evt) => {
    //INTERROMPENDO O EFEITO PADRÃO DO DO FORMULÁRIO
    evt.preventDefault()

    //CRIANDO O OBJETO DATA FORM
    const dadosForm = new FormData(formPessoa)

    //CRIADO E PREENCHENDO O OBJETO LITERAL PESSOA
    const pessoa = {
        nome: dadosForm.get('nome'),
        idade: dadosForm.get('idade'),
        renda: dadosForm.get('renda')
    }

    //CHAMANDO A FUNÇÃO addPessoa E PASSANDO O OBJETO LITERAL pessoa
    addPessoa(pessoa)

    //LIMPANDO O FOMULÁRIO
    formPessoa.reset()

})

//FUNÇÕES PARA CRUD
//FUNÇÃO PARA ADICIONAR PESSOA
const addPessoa = (objPessoa) => {
    //ADICIONANDO O OBJETO NO ARRAY pessoas, VINDO DO PARÂMETRO DA FUNÇÃO
    pessoas.push(objPessoa)

    listPessoa()
}

//FUNÇÃO LISTAR PESSOAS
const listPessoa = () => {
    //LIMPANDO A DIV
    divPessoa.innerHTML = ''
    
    //PERCORRENDO O ARRAY COM A ESTRUTURA DE REPETIÇÃO foreach
    pessoas.forEach((elem, i)=>{
        divPessoa.innerHTML += `<div class='item-pessoa'> ${ i + 1} - ${elem.nome} ${elem.idade} R$ ${parseFloat(elem.renda).toFixed(2).replace('.',',')} ${calculoDesconto(elem)} </div>`
    })
}


