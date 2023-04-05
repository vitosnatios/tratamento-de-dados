import { ITransacoes, Status } from '../types/globalTypes';

export const calcularPorStatus = (
  transacoes: ITransacoes[],
  status: Status
) => {
  const filtrarPorStatus = transacoes.filter(
    (transacao) => transacao.Status === status
  );
  return filtrarPorStatus.length;
};
