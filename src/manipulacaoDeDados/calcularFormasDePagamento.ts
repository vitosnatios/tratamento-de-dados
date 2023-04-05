import { FormaPagamento, ITransacoes } from '../types/globalTypes';

export const calcularFormasDePagamento = (
  transacoes: ITransacoes[],
  formaPagamento: FormaPagamento
): number => {
  const pegarComCartao = transacoes.filter(
    (transacao) => transacao['Forma de Pagamento'] === formaPagamento
  );
  return pegarComCartao.length;
};
