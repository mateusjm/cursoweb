let p1 = parseInt(prompt('Digite o peso 1:'))
let c1 = parseInt(prompt('Digite o comprimento 1:'))
let p2 = parseInt(prompt('Digite o peso 2:'))
let c2 = parseInt(prompt('Digite o comprimento 2:'))

    function verificarPeso() {

       if(p1 >= 10 && p1 <= 100 && p2 >= 10 && p2 <= 100 ) {
            
        } else {
            document.write('Verificar se os pesos estão entre 10 e 100.' + '<br>')
        } 

    }

    function verificarComprimento() {

        if(c1 >= 10 && c1 <= 100 && c2 >= 10 && c2 <= 100 ) {
            
        } else {
            document.write('Verificar se os comprimentos estão entre 10 e 100.')
        }

    }
    
    let criancaUm = parseInt(p1 * c1)
    let criancaDois = parseInt(p2 * c2)

    verificarPeso(p1, p2, c1, c2)
    verificarComprimento(p1, p2, c1, c2)

    function verificarGangorra () {

        if (criancaUm > criancaDois ) {
            document.write('-1')
        } else if (criancaUm < criancaDois) {
            document.write('1')
        } else {
            document.write('0')
        }   

    }

    verificarGangorra(criancaUm, criancaDois)