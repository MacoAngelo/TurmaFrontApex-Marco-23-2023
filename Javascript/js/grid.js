// Encontre a tabela e o botão de adicionar
let table = document.getElementById("product-table");

// Crie uma função para atualizar a tabela com base na variável produtosCadastrados
function updateTable() {
    // Limpe as linhas existentes da tabela
    let rows = table.getElementsByTagName("tr");
    while (rows.length > 1) {
        table.deleteRow(1);
    }

    // Adicione as linhas da tabela com base nos produtos
    for (let i = 0; i < produtosCadastrados.length; i++) {
        let product = produtosCadastrados[i];

        // Crie as células da linha
        let linha = table.insertRow(i + 1); //<tr>
        let nomeCell = linha.insertCell(0); //<td>
        let marcaCell = linha.insertCell(1);//<td>
        let valorCell = linha.insertCell(2);//<td>
        let quantidadeEstoqueCell = linha.insertCell(3);//<td>
        let actionsCell = linha.insertCell(4);//<td>

        // Preencha as células com os dados do produto
        nomeCell.textContent = product.nome;
        marcaCell.textContent = product.marca
        valorCell.textContent = product.valor;
        quantidadeEstoqueCell.textContent = product.quantidadeEstoque;
        actionsCell.innerHTML = `
        <button class="edit-button" data-index="${i}">Editar</button>
        <button class="remove-button" data-index="${i}">Remover</button>
      `;
      // A informação ou atributo data- é utilizada para identificar informações do registro.
      // Por exemplo: data-index informa o indice do registro que está sendo alterado.
      // Isso é utilizado em ambientes de desenvolvimento para facilitar a análise por parte dos programados.
      // Assim facilitando situações onde seria necessária uma análise para indetifica-la.

        // Adicione um evento de clique no botão de remover
        let removeButton = actionsCell.querySelector(".remove-button");
        removeButton.addEventListener("click", () => {
            // Remova o produto da variável
            produtosCadastrados.splice(i, 1);

            // Chame a função para atualizar a tabela
            updateTable();
        });

        // Adicione um evento de clique no botão de remover
        let editButton = actionsCell.querySelector(".edit-button");
        editButton.addEventListener("click", () => {
            carregarProduto(i);
        });
    }
}  