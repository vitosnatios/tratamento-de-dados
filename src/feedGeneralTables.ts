import { calc } from './manipulacaoDeDados/calc';
import { calcularDiaComMaisVendas } from './manipulacaoDeDados/calcularDiaComMaisVendas';
import { calcularFormasDePagamento } from './manipulacaoDeDados/calcularFormasDePagamento';
import { calcularPorStatus } from './manipulacaoDeDados/calcularPorStatus';
import { pegarValorGeral } from './manipulacaoDeDados/calcularTotal';
import { ITransacoes } from './types/globalTypes';

export const feedGeneralTable = (transacoes: ITransacoes[]) => {
  const tabelaGeral = document.getElementById('tabelaGeral');

  if (tabelaGeral) {
    tabelaGeral.innerHTML += `
      <tr>
        <td>${pegarValorGeral(transacoes)}</td>
        ${calc(transacoes, calcularFormasDePagamento, 'formasPagamento')}
        ${calc(transacoes, calcularPorStatus, 'status')}
        <td>${calcularDiaComMaisVendas(transacoes)}</td>
      </tr>
    `;
  }
};
