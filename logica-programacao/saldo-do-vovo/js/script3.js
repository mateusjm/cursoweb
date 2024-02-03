let saldo = parseInt(prompt('Informe seu saldo:'))
let tela = parseInt(prompt(' 0. Sair\n 1. Depósito\n 2. Crédito\n 3. Mínimo e Máximo'))
let saldoAtual = saldo
let menorSaldo = 0
let maiorSaldo = 0
console.log(tela)

    // depositar valor
    while(tela > 0 && tela < 2) {

        let d = parseInt(prompt('Depósito:')) 
        saldoAtual += d
        console.log(d)

        console.log(tela)
        
        if(saldoAtual > saldo) {
            maiorSaldo = saldoAtual
            saldo = saldoAtual
            
        }  
        
        tela = parseInt(prompt(' 0. Sair\n 1. Depósito\n 2. Crédito\n 3. Mínimo e Máximo'))
        console.log(tela)

    }

    

    // creditar valor
    while (tela > 1 && tela < 3) {
        
        let c = parseInt(prompt('Crédito:')) 
        saldoAtual += c
        console.log(c)

        console.log(tela)
        
        if(saldoAtual < saldo) {
            menorSaldo = saldoAtual
            saldo = saldoAtual
            
        }
        
        tela = parseInt(prompt(' 0. Sair\n 1. Depósito\n 2. Crédito\n 3. Mínimo e Máximo'))
        console.log(tela)

        console.log(saldoAtual)
        console.log(maiorSaldo)
        console.log(menorSaldo)

    }

    // minimo e máximo
    while (tela > 2 && tela < 4) {

        document.write('Valor máximo: ' + maiorSaldo + '<br>')
        document.write('Valor mínimo: ' + menorSaldo)

        tela=0

    }



    





