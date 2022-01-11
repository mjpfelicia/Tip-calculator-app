const conteudoTips = document.querySelectorAll(".conteudo__btn");

conteudoTips.forEach(tip => {

    tip.addEventListener("click", (ev) => {
        const valorConta = document.getElementById("bill");
        const gorgeta = Number(ev.target.value);
        const numberDePessoas = document.getElementById('nop');
        console.log({ gorgeta })

        const {
            gorgetaPagaPorPessoa,
            valorTotalApagar
        } = calcularDesconto(+valorConta.value, gorgeta, +numberDePessoas.value)
        exibirConta(gorgetaPagaPorPessoa, valorTotalApagar, numberDePessoas.value)
        console.log({
            gorgetaPagaPorPessoa,
            valorTotalApagar,

        })
    });
})


function calcularDesconto(valorConta, gorgeta, numberDePessoas) {

    if (numberDePessoas === 0) {
        return { gorgetaPagaPorPessoa: 0, valorTotalApagar: 0 };
    }
    const valorDaGorgeta = valorConta * gorgeta / 100;
    const gorgetaPagaPorPessoa = (valorDaGorgeta / numberDePessoas).toFixed(2);
    const valorTotalApagar = ((valorConta + valorDaGorgeta) / numberDePessoas).toFixed(2);
    console.log({ numberDePessoas })

    return { gorgetaPagaPorPessoa, valorTotalApagar };

}

function exibirConta(gorgetaPagaPorPessoa, valorTotalApagar, numberDePessoas) {
    const gorgeta = document.querySelector("#conteudo-TipAmount")
    const total = document.querySelector("#conteudo-total")
    const msgErro = document.querySelector('.conteudo-error')
    gorgeta.textContent = `$${ gorgetaPagaPorPessoa}`;
    total.textContent = `$${valorTotalApagar}`;

    if (numberDePessoas === '') {
        msgErro.style.display = "flex";
    }


}