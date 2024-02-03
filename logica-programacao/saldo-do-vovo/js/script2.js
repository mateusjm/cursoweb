let n = parseInt(prompt('Dias:'))
let saldo = parseInt(prompt('Saldo:'))
let maiorSaldo = saldo
let menorSaldo = saldo
let i = 0

    // identificar movimentação

    while(i < n) {
        let m = parseInt(prompt(`Movimentação:`))
        saldo += m

        console.log(m)


        // creditar um valor
        if (m >= 0 && m <= 10000) {
            // só recebe saldo se saldo for maior que maiorSaldo

            if(saldo > maiorSaldo) {
                maiorSaldo = saldo
            } else {
                
            }

        } 
        
        // depositar um valor
        else if (m <= 0 && m >= -10000) {

            menorSaldo = saldo

        }

        // relátorio

        console.log(maiorSaldo)
        console.log(menorSaldo)
        console.log(saldo)

        i++

    }
