function brenda() {
    console.log('ok deu certo')
}


function calc(){
console.log('deu certo')

let dolar_a = 5.61
let dolar_c = 4.44
let euro = 6.75

let valor = parseFloat(document.getElementById('value-input').value)

let options = document.getElementById('coin').value

switch (options) {
    case 'dolar_a':
        document.getElementById('final-value').innerHTML =  (valor/dolar_a).toFixed(2)
        break

    case 'dolar_c':
        document.getElementById('final-value').innerHTML =  (valor/dolar_c).toFixed(2)
        break

    case 'euro':
        document.getElementById('final-value').innerHTML = (valor/euro).toFixed(2)
        break

    default:
        document.getElementById('final-value').innerHTML = 'Tente novamente'
}
}