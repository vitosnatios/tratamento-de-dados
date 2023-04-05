import { ITransacoes } from './types/globalTypes';

export const isTransacao = (transacao: unknown): transacao is ITransacoes => {
  if (
    transacao &&
    typeof transacao === 'object' &&
    'Cliente Novo' in transacao &&
    'Data' in transacao &&
    'Email' in transacao &&
    'Forma de Pagamento' in transacao &&
    'ID' in transacao &&
    'Nome' in transacao &&
    'Status' in transacao &&
    'Valor (R$)' in transacao
  ) {
    return true;
  }
  return false;
};
