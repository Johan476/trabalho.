function converter() {
    // Obter os valores dos inputs
    var celsius = parseFloat(document.getElementById('inputCelsius').value) || 0;
    var fahrenheit = parseFloat(document.getElementById('inputFahrenheit').value) || 0;
    var kelvin = parseFloat(document.getElementById('inputKelvin').value) || 0;

    // Converter para Celsius
    var outputCelsius = celsius;
    var outputFahrenheit = (fahrenheit - 32) * 5/9;
    var outputKelvin = kelvin - 273.15;

    // Exibir resultados nos outputs
    document.getElementById('outputCelsius').value = outputCelsius.toFixed(2);
    document.getElementById('outputFahrenheit').value = outputFahrenheit.toFixed(2);
    document.getElementById('outputKelvin').value = outputKelvin.toFixed(2);

    // Calcular e exibir resultados adicionais, como exemplo
    var valorInput = parseFloat(document.getElementById('valorInput').value) || 0;
    var resultadoCelsius = outputCelsius * valorInput;
    var resultadoFahrenheit = outputFahrenheit * valorInput;
    var resultadoKelvin = outputKelvin * valorInput;

    document.getElementById('resultCelsius').innerText = "Valor em Celsius: " + resultadoCelsius.toFixed(2);
    document.getElementById('resultFahrenheit').innerText = "Valor em Fahrenheit: " + resultadoFahrenheit.toFixed(2);
    document.getElementById('resultKelvin').innerText = "Valor em Kelvin: " + resultadoKelvin.toFixed(2);
}