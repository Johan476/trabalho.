function converter() {
    // Obter os valores de entrada
    let kg = parseFloat(document.getElementById('inputKg').value) || 0;
    let g = parseFloat(document.getElementById('inputG').value) || 0;
    let l = parseFloat(document.getElementById('inputL').value) || 0;
    let valor = parseFloat(document.getElementById('valorInput').value) || 1;

    // Converter de kg para kg, g e l
    document.getElementById('outputKg').value = kg * valor;
    document.getElementById('outputG').value = (kg * 1000 + g) * valor;
    document.getElementById('outputL').value = l * valor;

    // Mostrar resultados
    document.getElementById('resultKg').textContent = Quilogramas: ${kg * valor};
    document.getElementById('resultG').textContent = Gramas: ${(kg * 1000 + g) * valor};
    document.getElementById('resultL').textContent = Litros: ${l * valor};
}