import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criaCarro(evento) {
    evento.preventDefault();

    const titulo = document.querySelector("[data-titulo]").value;
    const valor = document.querySelector("[data-valor]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    if (titulo === "" || valor === "" || imagem === "") {
        alert("Por favor, preencha todos os campos");
      } else {
    try {
        await conectaApi.criaCarro(titulo, valor, imagem);
        window.location.href = "../index.html";
    } catch (e) {
        alert(e);
    };   
};
};

formulario.addEventListener("submit", evento => criaCarro(evento));