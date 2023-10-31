const valorTotalDaCompra = document.getElementById("valor-total-compra");
const mensagemErro = document.getElementById("mensagem-erro");
const valorPago = document.getElementById("valor-pago");
const valorPassagem = 55;
let valorTotalPassagens = 0;
let passagensCompradas = [];

function selecionarCadeira(cadeira) {
  let assentoSelecionado = cadeira;

  if (assentoSelecionado.classList.contains("ocupado")) {
    mensagemErro.innerHTML = "ERRO: Assento já ocupado!!";
  } else if (assentoSelecionado.classList.contains("selecionado")) {
    assentoSelecionado.classList.remove("selecionado");
    passagensCompradas = passagensCompradas.filter(
      (id) => id !== assentoSelecionado.id
    );
    somaValorPassagem();
    mensagemErro.innerHTML = "";
  } else {
    assentoSelecionado.classList.add("selecionado");
    passagensCompradas.push(assentoSelecionado.id);
    somaValorPassagem();
    valorPago.innerHTML = "Valor pago: R$ 0,00";
    mensagemErro.innerHTML = "";
  }
}

function finalizarCompra() {
  for (id in passagensCompradas) {
    const selecionados = document.querySelector(".selecionado");
    selecionados.classList.remove("selecionado");
    selecionados.classList.add("ocupado");
  }
  valorPago.innerHTML = `Valor pago: R$ ${valorTotalPassagens},00`;
  passagensCompradas = [];
  somaValorPassagem();
}

function somaValorPassagem() {
  valorTotalPassagens = passagensCompradas.length * valorPassagem;
  valorTotalDaCompra.innerHTML = `R$ ${valorTotalPassagens},00 `;
}
