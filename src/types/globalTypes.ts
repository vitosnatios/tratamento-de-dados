export type Status =
  | 'Paga'
  | 'Recusada pela operadora de cartão'
  | 'Aguardando pagamento'
  | 'Estornada';

export type FormaPagamento = 'Cartão de Crédito' | 'Boleto';

export interface ITransacoes {
  'Cliente Novo': number;
  Data: string;
  Email: string;
  'Forma de Pagamento': FormaPagamento;
  ID: number;
  Nome: string;
  Status: Status;
  'Valor (R$)': string;
}
