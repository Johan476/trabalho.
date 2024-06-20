function converter() {
    // Obter os valores dos inputs
    var litros = parseFloat(document.getElementById('inputLitros').value) || 0;
    var mililitros = parseFloat(document.getElementById('inputMililitros').value) || 0;
    var galoes = parseFloat(document.getElementById('inputGaloes').value) || 0;

    // Calcular o total em litros
    var totalLitros = litros + (mililitros / 1000) + (galoes * 3.78541);

    // Exibir resultados nos outputs
    document.getElementById('outputLitros').value = totalLitros.toFixed(2);
    document.getElementById('outputMililitros').value = (totalLitros * 1000).toFixed(2);
    document.getElementById('outputGaloes').value = (totalLitros / 3.78541).toFixed(2);

    // Calcular e exibir resultados adicionais, como exemplo
    var valorInput = parseFloat(document.getElementById('valorInput').value) || 0;
    var resultado = totalLitros * valorInput;
    document.getElementById('resultLitros').innerText = "Valor em litros: " + resultado.toFixed(2);
}