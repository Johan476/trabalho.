let valorDe = 100; // Valor padrão de "De" (100 metros)
let valorPara = 200; // Valor padrão de "Para" (200 metros)

// Função para definir o valor de "De"
function definirValorDe(unidade) {
    switch (unidade) {
        case 'metros':
            valorDe = 100;
            break;
        case 'centimetros':
            valorDe = 100 * 100; // 100 metros em centímetros
            break;
        case 'milimetros':
            valorDe = 100 * 1000; // 100 metros em milímetros
            break;
        case 'polegadas':
            valorDe = 100 * 39.3701; // 100 metros em polegadas
            break;
        default:
            valorDe = 100;
    }
    document.getElementById('valorInput').value = valorDe;
}

// Função para definir o valor de "Para"
function converterPara(unidade) {
    switch (unidade) {
        case 'metros':
            valorPara = 200;
            break;
        case 'centimetros':
            valorPara = 200 * 100; // 200 metros em centímetros
            break;
        case 'milimetros':
            valorPara = 200 * 1000; // 200 metros em milímetros
            break;
        case 'polegadas':
            valorPara = 200 * 39.3701; // 200 metros em polegadas
            break;
        default:
            valorPara = 200;
    }
}

// Função para converter o valor de "De" para "Para"
function converterComprimento() {
    const valor = parseFloat(document.getElementById('valorInput').value);
    if (isNaN(valor)) {
        alert('Por favor, insira um valor numérico válido.');
        return;
    }
    
    let resultado;
    if (valorDe === 100) {
        switch (valorPara) {
            case 200:
                resultado = valor * 2;
                break;
            case 200 * 100:
                resultado = valor / 100 * 200;
                break;
            case 200 * 1000:
                resultado = valor / 1000 * 200;
                break;
            case 200 * 39.3701:
                resultado = valor / 39.3701 * 200;
                break;
        }
    } else if (valorDe === 100 * 100) {
        switch (valorPara) {
            case 200:
                resultado = valor / 2;
                break;
            case 200 * 100:
                resultado = valor * 2;
                break;
            case 200 * 1000:
                resultado = valor / 1000 * 2;
                break;
            case 200 * 39.3701:
                resultado = valor / 39.3701 * 2;
                break;
        }
    } else if (valorDe === 100 * 1000) {
        switch (valorPara) {
            case 200:
                resultado = valor / 200 * 1000;
                break;
            case 200 * 100:
                resultado = valor * 2;
                break;
            case