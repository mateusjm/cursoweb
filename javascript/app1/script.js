// tipo = valor ou acao
// valor = 0 ou +

function calcular(tipo, valor) {
        
    if(tipo == 'acao')  {
        // c = limpar visor
        if(valor === 'c') {
            document.getElementById('resultado').value = ''
        }
        // + = soma 
        // - = subtrai
        // * = multiplica
        // / = divide
        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('resultado').value += valor
        }

        if (valor === '=') {
           let valor_campo = eval(document.getElementById('resultado').value)
           document.getElementById('resultado').value = valor_campo
        }

    } else if (tipo == 'valor') {
        // recebe o valor, o número
        // ex.: 1, 5, 7
        document.getElementById('resultado').value += valor
    }
 

} 