export function formatBiaya(biaya) {
  if (!biaya) return 'Gratis';
  return `Rp${biaya.toLocaleString('id-ID')}`;
}
