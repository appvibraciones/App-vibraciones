// Función para calcular la amplitud A
function calcularAmplitud(theta0, thetaDot0, omega0) {
    return Math.sqrt(theta0 ** 2 + (thetaDot0 / omega0) ** 2);
}

// Función para calcular la fase inicial φ
function calcularFase(theta0, thetaDot0, A, omega0) {
    return Math.atan2(-thetaDot0 / (omega0 * A), theta0 / A);
}

function calcularOmega0(m, M, L, R, g) {
    const numerador = (m * (L) / 2) + M * (L + R);
    const denominador = (m * (L ** 2) / 3) + (2 / 5) * M * (R ** 2) + M * (L + R) ** 2;
    return Math.sqrt((numerador * g) / denominador);
}

const g = 9.81;  // Gravedad


// Agregar evento al botón de simulación
document.getElementById('simulateBtn').addEventListener('click', function() {
    const theta0 = parseFloat(document.getElementById('theta0').value);
    const thetaDot0 = parseFloat(document.getElementById('thetaDot0').value);
    const m = parseFloat(document.getElementById('masaBarra').value);    // Masa de la barra
    const M = parseFloat(document.getElementById('masaEsfera').value);    // Masa de la esfera
    const L = parseFloat(document.getElementById('longitudBarra').value);    // Longitud de la barra
    const R = parseFloat(document.getElementById('radioEsfera').value);  // Radio de la esfera
    const omega0 = calcularOmega0(m, M, L, R, g);
    // Calcular A y φ
    const A = calcularAmplitud(theta0, thetaDot0, omega0);
    const phi = calcularFase(theta0, thetaDot0, A, omega0);

    // Mostrar los resultados en la página
    document.getElementById('amplitude').textContent = A.toFixed(3);
    document.getElementById('phase').textContent = phi.toFixed(3);
});