import { feedGeneralTable } from './feedGeneralTables';
import { feedTransacoesTable } from './feedTransacoesTable';
import { isTransacao } from './transationCheck';

const handleTransacoes = (transacoes: unknown) => {
  if (transacoes && Array.isArray(transacoes)) {
    const transacoesChecadas = transacoes.filter(isTransacao);
    if (transacoesChecadas.length === transacoes.length) {
      feedGeneralTable(transacoesChecadas);
      feedTransacoesTable(transacoesChecadas);
    }
  }
};

const fetchTransacoes = async () => {
  const res = await fetch('https://api.origamid.dev/json/transacoes.json');
  const json = await res.json();
  handleTransacoes(json);
};

fetchTransacoes();
