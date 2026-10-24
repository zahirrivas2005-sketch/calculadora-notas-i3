
const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();

    const camposNotas = [
        document.getElementById("nota1"),
        document.getElementById("nota2"),
        document.getElementById("nota3")
    ];

    if (nombre === "") {
        resultado.textContent = "Por favor, ingresa el nombre del estudiante.";
        return;
    }

    const notasTexto = camposNotas.map(campo => campo.value.trim());

    if (notasTexto.some(nota => nota === "")) {
        resultado.textContent = "Debes ingresar las tres notas.";
        return;
    }

    const notas = notasTexto.map(Number);

    if (notas.some(nota => !Number.isFinite(nota) || nota < 0 || nota > 5)) {
        resultado.textContent = "Las notas deben estar entre 0 y 5.";
        return;
    }

    const promedio = (notas[0] + notas[1] + notas[2]) / 3;
    const estado = promedio >= 3 ? "Aprobó" : "No aprobó";

    resultado.textContent =
        `${nombre}: promedio ${promedio.toFixed(2)}. ${estado}.`;
});
