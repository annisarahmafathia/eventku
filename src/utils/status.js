import { isBefore, formatShort } from './date';

// state: 'selesai' | 'ditutup' | 'penuh' | 'dibuka'
export function getEventStatus(event) {
  const sisa = Math.max(event.kuota - event.terisi, 0);

  if (isBefore(event.tanggal)) {
    return { state: 'selesai', label: 'Event selesai', sisa };
  }
  if (isBefore(event.deadline)) {
    return { state: 'ditutup', label: 'Pendaftaran ditutup', sisa };
  }
  if (sisa <= 0) {
    return { state: 'penuh', label: 'Kuota penuh', sisa: 0 };
  }
  return { state: 'dibuka', label: `Daftar sebelum ${formatShort(event.deadline)}`, sisa };
}
