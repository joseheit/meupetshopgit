const formulario = document.querySelector("#contatoFormulario");
const mensagem = document.querySelector("#mensagemConfirmacao");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    mensagem.textContent =
        "Auau mensagem enviada com sucesso! Entraremos em contato.";

    formulario.reset();
});