function calcular() {
    const tipoCambio = 3.5;
    const distrito = document.getElementById("distrito").value;
    const largo = document.getElementById("largo").value;
    const ancho = document.getElementById("ancho").value;

    const area = largo * ancho;
    const valorS = area * distrito;
    const valorUS = valorS / tipoCambio;

    document.getElementById("area").textContent = "Área: " + area + " m²";
    document.getElementById("valorS").textContent = "Valor en S/: " + formatNumber(valorS.toFixed(2));
    document.getElementById("valorUS").textContent = "Valor en US/: " + formatNumber(valorUS.toFixed(2));
}

function limpiar() {
    document.getElementById("precio-form").reset();
    document.getElementById("area").textContent = "Área: ";
    document.getElementById("valorS").textContent = "Valor en S/: ";
    document.getElementById("valorUS").textContent = "Valor en US/: ";
}

function formatNumber(number) {
    return parseFloat(number).toLocaleString('en-US', {
        minimumFractionDigits: 2
    });
}
