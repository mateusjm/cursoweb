var a = prompt('Digite o valor de a:')
var b = prompt('Digite o valor de b:')
var c = prompt('Digite o valor de c:')

var a = parseFloat(a)
var b = parseFloat(b)
var c = parseFloat(c)

var resultado = (b*b) - (4*a*c)
var x1 = -(b) + (Math.sqrt(resultado))/(2*a)

    function exibirDelta() {
        
        if (resultado === 0) {
            document.write('Raízes reais e iguais')
        }
        
        if (resultado > 0) {
            document.write('Raízes reais e distintas')
        }

        if (resultado < 0) {
            document.write('Raízes complexas')
        }
    }
    
    document.write('O valor de a: ' + a + '<br>')
    document.write('O valor de b: ' + b + '<br>')
    document.write('O valor de c: ' + c + '<hr>')

    
    document.write((a) + 'x² ' + b + 'x ' + c + '<hr>')
    document.write('Delta é igual a: ' + resultado + '<br>')
    document.write('x1 é igual a: ' + x1 + '<br>')

    exibirDelta()
