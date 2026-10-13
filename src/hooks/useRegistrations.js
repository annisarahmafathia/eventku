import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

// Penanda pribadi: event mana saja yang sudah didaftar mahasiswa di situs penyelenggara.
// Pendaftaran resminya tetap dilakukan lewat link penyelenggara (linkDaftar).
export function useRegistrations() {
  const [ids, setIds] = useLocalStorage('eventku:registered', []);

  const isRegistered = useCallback((eventId) => ids.includes(eventId), [ids]);

  const toggleRegistered = useCallback(
    (eventId) => {
      setIds((prev) => (prev.includes(eventId) ? prev.filter((id) => id !== eventId) : [...prev, eventId]));
    },
    [setIds],
  );

  return { registeredIds: ids, isRegistered, toggleRegistered };
}
