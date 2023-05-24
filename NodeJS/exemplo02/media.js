const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var media = (num1, num2) => {
    return (num1 + num2) / 2;
}

var mediaComEntrada = () => {
    rl.question("Digite o primeiro número: ", (numeroDigitado1) => {
        rl.question("Digite o segundo número: ", (numeroDigitado2) => {
            let media = (parseFloat(numeroDigitado1) + parseFloat(numeroDigitado2)) / 2;
            console.log(`A média dos números ${numeroDigitado1} e ${numeroDigitado2} é igual a ${media}!`);
            rl.close();
        });
    });
}

// module.exports = media
module.exports = mediaComEntrada;