// Função para gerar um software de acordo com o tipo fornecido
function gerarSoftware(tipo) {
    let resultado = "";

    switch (tipo) {
        case 'gerador':
            resultado = "Software gerador foi acionado!";
            break;
        default:
            resultado = "Tipo de software não reconhecido.";
    }

    document.getElementById('geradorResult').textContent = resultado;
}

// Função para converter valores de acordo com o tipo fornecido
function converterSoftware(t