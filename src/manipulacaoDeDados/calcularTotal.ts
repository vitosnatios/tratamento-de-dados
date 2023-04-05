import { formatarParaReal } from '../utils/formatarParaReal';
import { ITransacoes } from '../types/globalTypes';
import { formatarValor } from '../utils/formatarValor';

export const pegarValorGeral = (transacoes: ITransacoes[]) => {
  const valores = transacoes.reduce((prev, cur) => {
    const valorToNum = formatarValor(cur['Valor (R$)']);
    if (valorToNum) return prev + valorToNum;
    return prev;
  }, 0);
  return formatarParaReal(valores);
};
