var a = prompt('Digite o número a:')
var b = prompt('Digite o número b:')
var c = prompt('Digite o número c:')

var a = parseFloat(a)
var b = parseFloat(b)
var c = parseFloat(c)

var delta = (b*b) - (4*a*c)
var raiz = Math.sqrt(delta)

var x1 = b + raiz/2*a
var x2 = 0

document.write('O valor de delta é: ' + delta + '<br>')
document.write('A raiz de delta é: ' + raiz + '<br>')
document.write('O valor de x1 é: ' + x1 + '<br>')
document.write('O valor de x2 é: ' + x2)

console.log(a)
console.log(b)
console.log(c)
console.log(delta)
console.log(raiz)
console.log(x1)
console.log(x2)





