const url = "https://6771ad77ee76b92dd4904888.mockapi.io/Produtos";
async function listaProdutos() {
    const conexao = await fetch(url);
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaCarro(titulo, valor, imagem) {
    const conexao = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            valor: `$ ${valor}`,
            imagem: imagem,
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o produto");
    }
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

async function deletarProduto(id) {
    const conexao = await fetch(`${url}/${id}`, {
        method: 'DELETE'
    });

    if (!conexao.ok) {
        throw new Error('Erro ao excluir o produto');
    };

    return conexao.json();
};

export const conectaApi = {
    listaProdutos,
    criaCarro,
    deletarProduto
};
