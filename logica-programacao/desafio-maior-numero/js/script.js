let numeros = Array()
let x
    
    for (i=0; x != 0; i++) {

        x = parseInt(prompt('Digite seu número:'))
        console.log(x)
        
        numeros[i] = x 
        //console.log(numeros)
        //console.log(i)    
        
    }

    function verificarMaior(a,b) {
        return a-b
    }

    let resultado = (numeros.sort(verificarMaior))

    //console.log(resultado)
    console.log(resultado[resultado.length - 1])
