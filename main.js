const conteudoTips = document.querySelectorAll(".conteudo__item");
const custom = document.getElementById("custom");

conteudoTips.forEach(tip => {

    tip.addEventListener("click", (ev) => {
        const gorgeta = Number(ev.target.value);
        const valorConta = document.getElementById("bill");
        const numberDePessoas = document.getElementById('nop');

        const {
            gorgetaPagaPorPessoa,
            valorTotalApagar
        } = calcularDesconto(+valorConta.value, gorgeta, +numberDePessoas.value)

        exibirConta(gorgetaPagaPorPessoa, valorTotalApagar, +numberDePessoas.value)


    });
});


custom.addEventListener("change", (ev) => {
    const gorgeta = Number(ev.target.value);
    const valorConta = document.getElementById("bill");
    const numberDePessoas = document.getElementById('nop');

    const {
        gorgetaPagaPorPessoa,
        valorTotalApagar
    } = calcularDesconto(+valorConta.value, gorgeta, +numberDePessoas.value)
    exibirConta(gorgetaPagaPorPessoa, valorTotalApagar, +numberDePessoas.value)

})


function calcularCustom(valorConta, gorgeta, numberDePessoas) {

    if (numberDePessoas === 0) {
        return { gorgetaPagaPorPessoa: 0, valorTotalApagar: 0 };
    }
    const valorDaGorgeta = valorConta * gorgeta / 100;
    const gorgetaPagaPorPessoa = (valorDaGorgeta / numberDePessoas).toFixed(2);
    const valorTotalApagar = ((valorConta + valorDaGorgeta) / numberDePessoas).toFixed(2);

    return { gorgetaPagaPorPessoa, valorTotalApagar };
}



function calcularDesconto(valorConta, gorgeta, numberDePessoas) {

    if (numberDePessoas === 0) {
        return { gorgetaPagaPorPessoa: 0, valorTotalApagar: 0 };
    }
    const valorDaGorgeta = valorConta * gorgeta / 100;
    const gorgetaPagaPorPessoa = (valorDaGorgeta / numberDePessoas).toFixed(2);
    const valorTotalApagar = ((valorConta + valorDaGorgeta) / numberDePessoas).toFixed(2);

    return { gorgetaPagaPorPessoa, valorTotalApagar };

}

function exibirConta(gorgetaPagaPorPessoa, valorTotalApagar, numberDePessoas) {
    const gorgeta = document.querySelector("#conteudo-TipAmount")
    const total = document.querySelector("#conteudo-total")
    const msgErro = document.querySelector('.conteudo_error')

    gorgeta.textContent = `$${ gorgetaPagaPorPessoa}`;
    total.textContent = `$${valorTotalApagar}`;

    if (numberDePessoas === 0) {
        msgErro.style.display = "flex";

    }

}

const rest = document.querySelector(".conteudo__reset")

rest.addEventListener("click", (ev) => {

    console.log("resetValores")
    const resetPagaPorPessoa = document.querySelector("#conteudo-TipAmount")
    const valorTotalApagar = document.querySelector("#conteudo-total")
    resetPagaPorPessoa.textContent = `$0.00`;
    valorTotalApagar.textContent = `$0.00`;


})