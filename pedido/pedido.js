function prepararPedido(pedido) {
  return new Promise((resolve, reject) => {
    const tempo = Math.floor(Math.random() * 3000) + 1000;
    const erro = Math.random() < 0.2;

    setTimeout(() => {
      if (erro) {
        reject(`Erro no pedido "${pedido}": Faltaram ingredientes.`);
      } else {
        resolve(`✅ Pedido "${pedido}" pronto!`);
      }
    }, tempo);
  });
}

const pedidos = ['Hambúrguer', 'Pizza', 'Salada', 'Suco'];
const promessas = pedidos.map(prepararPedido);

const saida = document.getElementById('saida');

Promise.all(promessas)
  .then(resultados => {
    resultados.forEach(msg => {
      saida.textContent += msg + "\n";
    });
  })
  .catch(erro => {
    saida.textContent += "⚠️ Erro ao preparar um dos pedidos:\n" + erro + "\n";
  })
  .finally(() => {
    saida.textContent += "\n🍽️ Todos os pedidos foram processados.";
  });
