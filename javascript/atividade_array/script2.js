let objetos = Array('Cadeira', 'Impressora', 'Garfo')


function adicionarElemento() {

    let objeto_novo = document.getElementById('objeto').value
    console.log(objeto_novo)

    objetos.indexOf(objeto_novo)
    console.log(objetos.indexOf(objeto_novo))

    if (objeto_novo === '') {
        alert('Informe um valor válido')
        document.getElementById('objeto').value = ''

    } else if (parseInt(objetos.indexOf(objeto_novo)) !== -1) {
        console.log('Objeto já foi adicionado')

    } else {
        objetos.push(document.getElementById('objeto').value)
        document.getElementById('objeto').value = ''
    }

    console.log(objetos)

}

function ordenarElemento() {
    
    console.log(objetos.sort())

}

