export const useManaSymbols = () => {
  const symbols: Record<string, string> = {};

  const base = 'https://svgs.scryfall.io/card-symbols';

  // Colori base
  ['W', 'U', 'B', 'R', 'G', 'C', 'S'].forEach((s) => {
    symbols[s] = `${base}/${s}.svg`;
  });

  // Numeri da 0 a 20 + X + Y + Z + ∞
  [
    ...Array.from({ length: 21 }, (_, i) => i.toString()),
    'X',
    'Y',
    'Z',
    '∞',
  ].forEach((s) => {
    symbols[s] = `${base}/${s}.svg`;
  });

  // Ibridi (color-color e color-incolore)
  const colors = ['W', 'U', 'B', 'R', 'G'];
  for (const c1 of colors) {
    for (const c2 of colors) {
      if (c1 !== c2) {
        symbols[`${c1}/${c2}`] = `${base}/${c1}${c2}.svg`;
      }
    }
    symbols[`2/${c1}`] = `${base}/2${c1}.svg`;
    symbols[`${c1}/P`] = `${base}/${c1}P.svg`; // Phyrexian
  }

  // Alcuni simboli speciali noti
  symbols['P'] = `${base}/P.svg`; // Phyrexian generico
  symbols['T'] = `${base}/T.svg`; // TAP
  symbols['Q'] = `${base}/Q.svg`; // UNTAP
  symbols['CHAOS'] = `${base}/CHAOS.svg`;
  symbols['E'] = `${base}/E.svg`; // Energy

  return { symbols };
}
