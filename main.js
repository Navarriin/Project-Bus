const elementoPrecoTotalCompra = document.getElementById("valor-total-compra");
const valorTotalPago = document.getElementById("valor-pago");
const valorUnicaPassagem = 52;
let valorTotalPassagens = 0;
let assentosSelecionados = [];

function selecionarCadeira(cadeira) {
  const cadeiraSelecionada = cadeira;
  if (assentosSelecionados.length === 0) {
    valorPago();
  }

  if (cadeiraSelecionada.classList.contains("selecionado")) {
    cadeiraSelecionada.classList.remove("selecionado");
    assentosSelecionados = assentosSelecionados.filter(
      (id) => id !== cadeiraSelecionada.id
    );
    somaValorPassagens();
    return;
  }

  if (cadeiraSelecionada.classList.contains("ocupado")) {
    return;
  }

  cadeiraSelecionada.classList.add("selecionado");
  assentosSelecionados.push(cadeiraSelecionada.id);
  somaValorPassagens();
}

function finalizarCompra() {
  for (const id in assentosSelecionados) {
    const selecionados = document.querySelector(".selecionado");
    selecionados.classList.remove("selecionado", "hover:scale-105");
    selecionados.classList.add("ocupado");
  }

  valorPago();
  assentosSelecionados = [];
  somaValorPassagens();
}

function somaValorPassagens() {
  valorTotalPassagens = assentosSelecionados.length * valorUnicaPassagem;
  atualizarVizualizacaoPreco();
}

function atualizarVizualizacaoPreco() {
  elementoPrecoTotalCompra.innerHTML = `R$ ${valorTotalPassagens},00`;
}

function valorPago() {
  valorTotalPassagens = assentosSelecionados.length * valorUnicaPassagem;
  const valorTotal = valorTotalPassagens;
  valorTotalPago.innerHTML = `Valor pago: R$ ${valorTotal},00`;
}
