import { useRegistrationContext } from '../context/RegistrationContext';
import { CheckIcon } from './Icons';

export default function RegisteredToggle({ eventId, judul }) {
  const { isRegistered, toggleRegistered } = useRegistrationContext();
  const registered = isRegistered(eventId);

  return (
    <button
      type="button"
      onClick={() => toggleRegistered(eventId)}
      aria-pressed={registered}
      aria-label={registered ? `Hapus tanda sudah daftar untuk ${judul}` : `Tandai sudah daftar untuk ${judul}`}
      className={`btn border ${registered ? 'border-brand bg-brand/10 text-brand' : 'border-line bg-surface text-ink hover:border-brand'}`}
    >
      <CheckIcon />
      {registered ? 'Sudah daftar' : 'Tandai sudah daftar'}
    </button>
  );
}
