let saldo = parseInt(prompt('Informe seu saldo:'))
let tela = parseInt(prompt(' 0. Sair\n 1. Depósito\n 2. Crédito\n 3. Mínimo e Máximo'))
let saldoAtual = saldo
let menorSaldo = saldo
let maiorSaldo = saldo
console.log(tela)

    // depositar valor
    while (tela != 0) {



        if (tela > 0 && tela < 2) {
            let d = parseInt(prompt('Depósito:')) 
            saldoAtual += d
            console.log(d)

            console.log(tela)
            
            if(saldoAtual > maiorSaldo) {
                maiorSaldo = saldoAtual 
                saldo = saldoAtual
                
            }  

            console.log(saldo)
            
            tela = parseInt(prompt(' 0. Sair\n 1. Depósito\n 2. Crédito\n 3. Mínimo e Máximo'))
            console.log(tela)
            
            
        } else if (tela > 1 && tela < 3) {
            
            let c = parseInt(prompt('Crédito:')) 
            saldoAtual += c
            console.log(c)
        
            console.log(tela)
                
            if(saldoAtual < saldo) {
                menorSaldo = saldoAtual
                saldo = saldoAtual
                    
            }
            
            console.log(saldo)
            
            tela = parseInt(prompt(' 0. Sair\n 1. Depósito\n 2. Crédito\n 3. Mínimo e Máximo'))
                
            
        }
        
        if (tela > 2 && tela < 4) {
            
            document.write('Valor máximo: ' + maiorSaldo + '<br>')
            document.write('Valor mínimo: ' + menorSaldo)
            tela = 0
            
        } 
 
    }

    

        

        

    



    





