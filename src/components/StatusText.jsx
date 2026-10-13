const TONE = {
  dibuka: 'text-workshop',
  penuh: 'text-lomba',
  ditutup: 'text-muted',
  selesai: 'text-muted',
};

export default function StatusText({ status }) {
  return <span className={`text-xs font-semibold ${TONE[status.state]}`}>{status.label}</span>;
}
