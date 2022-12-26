function fatorial() {
    let saida = document.getElementById('saida');
    let numero = Number(document.getElementById('fnum').value);

    saida.innerHTML += `<h2>Calculando ${numero}!</h2>`;
    let calculo = numero;
    let fatorial = 1;
    while (calculo > 1) {
        saida.innerHTML += `${calculo} x `;
        fatorial *= calculo; // Corresponde ao cálculo fatorial = fatorial * calculo
        calculo--
    }
    saida.innerHTML +=`1 = <strong>${fatorial.toLocaleString('pt-BR')}</strong><hr />`;
    // Usei o toLocaleString() na linha acima apenas para aparecerem os separadores de milhar/milhoes/ etc
}