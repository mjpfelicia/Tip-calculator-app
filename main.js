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

    console.log({ numberDePessoas });

    if (numberDePessoas === 0) {
        msgErro.style.display = "flex";

    } else {
        msgErro.style.display = "none";
    }

}
const numberDePessoas = document.getElementById('nop');

numberDePessoas.addEventListener("focus", ev => {
    const msgErro = document.querySelector('.conteudo_error');
    msgErro.style.display = "none";

    console.log({ ev })
})



const rest = document.querySelector(".conteudo__reset")

rest.addEventListener("click", (ev) => {


    const resetPagaPorPessoa = document.querySelector("#conteudo-TipAmount");
    const valorTotalApagar = document.querySelector("#conteudo-total");
    const resetInput = document.querySelectorAll(".reset_conteudo");
    resetPagaPorPessoa.textContent = `$0.00`;
    valorTotalApagar.textContent = `$0.00`;

    resetInput.forEach(input => {

        input.value = '0';

    });
    console.log({ resetInput })


})