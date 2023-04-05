import { FormaPagamento, ITransacoes, Status } from '../types/globalTypes';

type Propriedades = {
  formasPagamento: FormaPagamento[];
  status: Status[];
};

const propriedadesParaRenderizar: Propriedades = {
  formasPagamento: ['Cartão de Crédito', 'Boleto'],
  status: [
    'Paga',
    'Recusada pela operadora de cartão',
    'Aguardando pagamento',
    'Estornada',
  ],
};

export const calc = (
  transacoes: ITransacoes[],
  func: Function,
  prop: 'formasPagamento' | 'status'
) => {
  return propriedadesParaRenderizar[prop]
    .map((filtro) => `<td>${func(transacoes, filtro)}</td>`)
    .join('');
};
