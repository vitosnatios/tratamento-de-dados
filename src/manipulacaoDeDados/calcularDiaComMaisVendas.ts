import { ITransacoes } from '../types/globalTypes';

interface Days {
  [key: string]: number;
}

export const calcularDiaComMaisVendas = (transacoes: ITransacoes[]) => {
  const semana = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const days: Days = {};
  const toIso = (data: string) => {
    const cortado = data.split(' ')[0].split('/');
    const horarioAjustado: string = `${cortado[1]}/${cortado[0]}/${cortado[2]}`;
    return new Date(Date.parse(horarioAjustado)).getDay();
  };
  transacoes.forEach((transacao) => {
    const diaDaSemana = toIso(transacao.Data);
    if (days[diaDaSemana] && diaDaSemana !== 0) {
      days[diaDaSemana] += 1;
    } else if (!days[diaDaSemana] && diaDaSemana !== 0) {
      days[diaDaSemana] = 1;
    }
  });
  const keysOfDays = Object.keys(days);
  const diaComMais = keysOfDays.reduce(
    (prev, cur) => {
      if (days[cur] > Number(prev[1])) return [cur, days[cur]];
      return prev;
    },
    ['', 0]
  );
  return semana[Number(diaComMais[0])];
};
