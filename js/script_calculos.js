
/**
 * 
 * <p>São isentas as pessoas: Menor de idade e com renda até R$ 1700,00</p>
    <p> DE 1701,00 até R$ 5000,00 -> 5%</p>
    <p> De R$ 5001,00 até R$ 8000,00 -> 8% </p>
    <p> De R$ 8001,00 até 10000,00 -> 10% </p>
    <p> DE R$ 10001,00 em dia -> 3% </p
 */
const calculoDesconto = (objPessoa) => {
    let resposta = ''

    if((objPessoa.idade < 18) || (objPessoa.renda <= 1700)){
        resposta = 'Isento de Desconto'
    }else if(objPessoa.renda <= 5000){
        resposta = `R$ ${parseFloat(objPessoa.renda * 0.05).toFixed(2).replace('.',',')}`
    }else if(objPessoa.renda <= 8000){
        resposta = `R$ ${parseFloat(objPessoa.renda * 0.08).toFixed(2).replace('.',',')}`
    }else if(objPessoa.renda <= 10000){
        resposta = `R$ ${parseFloat(objPessoa.renda * 0.10).toFixed(2).replace('.',',')}`
    }else{
        resposta = `R$ ${parseFloat(objPessoa.renda * 0.03).toFixed(2).replace('.',',')}`
    }

    return resposta
}

export {calculoDesconto}