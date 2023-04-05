export const formatarParaReal = (preco: number) => {
  return preco.toLocaleString('BRL', {
    style: 'currency',
    currency: 'BRL',
  });
};
