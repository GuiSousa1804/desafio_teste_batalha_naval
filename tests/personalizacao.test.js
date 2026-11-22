/** Versão: Guilherme Sousa | RA: 24458923-2
 * Cenário adicional: Isolamento entre duas partidas.
 */

const { criarTabuleiro, TIPOS_NAVIO: T, ORIENTACAO: O } = require('../src/batalhaNaval');
test('posicionar navio em uma partida não modifica outra', () => {
  const a = criarTabuleiro(); const b = criarTabuleiro();
  a.posicionarNavio(T.SUBMARINO, 4, 4, O.HORIZONTAL);
  expect(a.obterCelula(4, 4).ocupada).toBe(true);
  expect(b.obterCelula(4, 4).ocupada).toBe(false);
  expect(b.navios).toHaveLength(0);
});
