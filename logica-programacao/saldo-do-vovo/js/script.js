let n = parseInt(prompt('Digite o número de dias: ')) // número de dias
let saldo = parseInt(prompt('Digite o saldo inicial da conta:')) // saldo inicial

    // função para verificar dias
    function verificarDias() {

        if(n >= 1 && n <= 30) {

        } else {
            document.write('Verificar se o número de dias estão entre 1 e 30.' + '<br>')
        }

    }
    
    // função para verificar saldo
    function verificarSaldo() {

        if (saldo >= -1000 && saldo <= 1000) {

        } else {
            document.write('Verificar se o saldo inicial está entre -1000 e 1000')
        }

    }   
    
    let menorSaldo = saldo

    for (i=0; i < n; i++) {
        let m = parseInt(prompt(`Movimentação ${i+1}:`))
        
        saldo += m

        console.log(m)

        if(menorSaldo > saldo) {
            console.log(menorSaldo, saldo)
            menorSaldo = saldo
        }

    }

        console.log(menorSaldo)

    verificarDias(n)
    verificarSaldo(saldo)

    





