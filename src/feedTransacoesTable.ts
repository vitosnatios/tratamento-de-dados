import { formatarParaReal } from './utils/formatarParaReal';
import { ITransacoes } from './types/globalTypes';
import { formatarValor } from './utils/formatarValor';

export const feedTransacoesTable = (transacoes: ITransacoes[]) => {
  const tbody = document.getElementById('tabelaTransacoes');
  const transacoesPorData = transacoes.sort((a, b) => {
    return Date.parse(a.Data) - Date.parse(b.Data);
  });
  if (tbody) {
    transacoesPorData.forEach((transacoes) => {
      const preco = formatarValor(transacoes['Valor (R$)']);
      const precoFormatado = preco ? formatarParaReal(preco) : '-';
      tbody.innerHTML += `
      <tr>
        <td>${transacoes['Cliente Novo'] ? 'Sim' : 'Não'}</td>
        <td>${transacoes.Data}</td>
        <td>${transacoes.Email}</td>
        <td>${transacoes['Forma de Pagamento']}</td>
        <td>${transacoes.ID}</td>
        <td>${transacoes.Nome}</td>
        <td>${transacoes.Status}</td>
        <td>${precoFormatado}</td>
      </tr>
      `;
    });
  }
};
