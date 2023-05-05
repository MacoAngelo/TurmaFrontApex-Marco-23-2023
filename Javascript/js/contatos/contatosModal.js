let form = document.getElementById('contatos-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    let indexInput = document.getElementById('contato-index');
    let nomeInput = document.getElementById('contato-nome');
    let emailInput = document.getElementById('contato-email');
    let idadeInput = document.getElementById('contato-idade');
    let cidadeInput = document.getElementById('contato-cidade');

    let index = indexInput.value;
    let nome = nomeInput.value;
    let email = emailInput.value;
    let idade = idadeInput.value;
    let cidade = cidadeInput.value;

    if (index == "") {
        let contato = new Contato(nome, email, idade, cidade);
        contato.add();
    } else {
        let contato = new Contato();
        contato.load(index);

        contato.nome = nome;
        contato.email = email;
        contato.idade = idade;
        contato.cidade = cidade;

        contato.update();
    }

    // Limpar o formulário
    indexInput.value = "";
    form.reset();
});

let closeButton = document.getElementById('modal-close-button');
closeButton.addEventListener('click', () => {
    let modal = document.getElementById('modal');
    modal.style.display = 'none';
})