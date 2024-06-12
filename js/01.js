function calcular(dur, aulas) {
    const sem = aulas * dur;
    return sem;
}

function gerar() {
    const prof = document.getElementById('prof').value;
    const dur = parseFloat(document.getElementById('dur').value);
    const aulas = parseInt(document.getElementById('aulas').value);

    if (!prof || isNaN(dur) || isNaN(aulas)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    const sem = calcular(dur, aulas);

    let rest = document.getElementById('rest');
    rest.innerHTML += `<p>Total de horas na semana de Prof. ${prof}: ${sem} horas</p>`;
}
