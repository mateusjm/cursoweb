var a = prompt('Digite o valor de a:')
var b = prompt('Digite o valor de b:')
var c = prompt('Digite o valor de c:')

var a = parseFloat(a)
var b = parseFloat(b)
var c = parseFloat(c)

var resultado = 0

    function resolverEquacao(a, b, c, callbackBeta) {
        if (callbackBeta > 0) {
            document.write((a) + 'x² ' + b + 'x ' + c)
            document.write('Raízes reais e distintas')
        } 
        
        if (callbackBeta = 0){
            document.write((a) + 'x² ' + b + 'x ' + c)
            document.write('Raízes reais e iguais')
        }

        return resultado
    }


    var callbackBeta = function(a, b, c){
        resultado = (b*b ) - (4*a*c)
    }

    document.write('O valor de a: ' + a + '<hr>')
    document.write('O valor de b: ' + b + '<hr>')
    document.write('O valor de c: ' + c + '<hr>')
    document.write('O resultado é: ' + resultado)




