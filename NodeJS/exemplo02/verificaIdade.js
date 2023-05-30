var verificacao = (idade) => {
    if (idade >= 18) {
        console.log(`A idade ${idade} representa alguém maior de idade!`);
    }
    else {
        console.log(`A idade ${idade} representa alguém menor de idade!`);
    }
}

module.exports = verificacao;