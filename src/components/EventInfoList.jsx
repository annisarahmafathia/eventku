import { CalendarIcon, ClockIcon, PinIcon, UsersIcon, WalletIcon } from './Icons';
import { formatLong, formatShort } from '../utils/date';
import { formatBiaya } from '../utils/format';

export default function EventInfoList({ event, sisaKuota }) {
  const rows = [
    { icon: CalendarIcon, label: 'Tanggal', value: formatLong(event.tanggal) },
    { icon: ClockIcon, label: 'Waktu', value: event.waktu },
    { icon: PinIcon, label: 'Lokasi', value: `${event.lokasi} (${event.format})` },
    { icon: UsersIcon, label: 'Penyelenggara', value: event.penyelenggara },
    { icon: WalletIcon, label: 'Biaya', value: formatBiaya(event.biaya) },
    { icon: CalendarIcon, label: 'Batas pendaftaran', value: formatShort(event.deadline) },
    { icon: UsersIcon, label: 'Sisa kuota', value: `${sisaKuota} dari ${event.kuota} peserta` },
  ];

  return (
    <dl className="divide-y divide-line rounded-xl border border-line bg-surface">
      {rows.map(({ icon: Icon, label, value }) => (
        <div key={label} className="flex items-start gap-3 px-4 py-3">
          <Icon className="mt-0.5 shrink-0 text-muted" />
          <div>
            <dt className="text-xs font-semibold text-muted">{label}</dt>
            <dd className="text-sm font-medium">{value}</dd>
          </div>
        </div>
      ))}
    </dl>
  );
}
