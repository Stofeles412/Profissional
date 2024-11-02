function calcularCustos() {
    // Coleta de valores do formulário
    const ipva = parseFloat(document.getElementById('ipva').value) || 0;
    const financiamento = parseFloat(document.getElementById('financiamento').value) || 0;
    const seguro = parseFloat(document.getElementById('seguro').value) || 0;
    const gasolina = parseFloat(document.getElementById('gasolina').value) || 0;
    const outros = parseFloat(document.getElementById('outros').value) || 0;
    const intervalo = document.getElementById('intervalo').value;

    // Cálculos para intervalos
    const custoDiario = (ipva / 365) + (seguro / 365) + (financiamento / 30) + (gasolina / 30) + (outros / 30);
    const custoSemanal = custoDiario * 7;
    const custoMensal = custoDiario * 30;

    let custoFinal = 0;

    if (intervalo === 'diario') {
        custoFinal = custoDiario;
    } else if (intervalo === 'semanal') {
        custoFinal = custoSemanal;
    } else if (intervalo === 'mensal') {
        custoFinal = custoMensal;
    }

    // Exibindo o resultado
    document.getElementById('resultado').innerHTML = `
        <p>Custo ${intervalo.charAt(0).toUpperCase() + intervalo.slice(1)}: R$ ${custoFinal.toFixed(2)}</p>
    `;
}
