function mostrarValores() {
    let campo1 = Number(document.getElementById("campo1").value);
    let campo2 = parseFloat(document.getElementById("campo2").value);

    let soma = campo1 + campo2;

    document.getElementById("resultado").value = soma;
}

function calcular() {
    let c1 = Number(document.getElementById("campo1").value);
    let c2 = Number(document.getElementById("campo2").value);

    let soma = c1 + c2;

    document.getElementById('resultado').value = soma;
}

document.getElementById("campo2").addEventListener('blur', calcular);