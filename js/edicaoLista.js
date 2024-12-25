import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(titulo, valor, imagem, id) {
    const produto = document.createElement("div");
    produto.className = "card";
    produto.innerHTML = `<img class="img__carros" src="${imagem}" alt="${titulo}">
                    <div class="card-container--info" data-id="${id}">
                        <p class="nome__carros">${titulo}</p>
                        <div class="card-container--value">
                            <p class="preco__carros">${valor}</p>
                            <img class="img__x" type="image" src="imagens/x.png" alt="Ícone excluir">
                        </div>
                    </div>`;

    const deleteButton = produto.querySelector(".img__x");
    deleteButton.addEventListener("click", async () => {
        try {
            await conectaApi.deletarProduto(id, titulo);
            produto.remove();
        } catch (id) {
            console.error(`Erro ao excluir o carro ${titulo}`);
        };
    });

    return produto;
};

async function listaProdutos() {
    try {
        const listaApi = await conectaApi.listaProdutos();
        listaApi.forEach(elemento => lista.appendChild(
            constroiCard(elemento.titulo, elemento.valor, elemento.imagem, elemento.id)));
    } catch {
        lista.innerHTML = `<h2>Não foi possível carregar a lista de carros</h2>`;
    };
};

listaProdutos();



