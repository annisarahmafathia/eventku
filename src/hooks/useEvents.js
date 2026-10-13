import { useMemo } from 'react';
import eventsData from '../data/events.json';
import { getEventStatus } from '../utils/status';

export const EMPTY_FILTERS = { query: '', kategori: 'semua', dari: '', sampai: '', hanyaDibuka: false };

const sortByDate = (a, b) => a.tanggal.localeCompare(b.tanggal);

// Hooks Pattern: seluruh logika pencarian dan filter ada di sini,
// komponen cukup memberi filter dan menerima daftar event.
export function useEvents(filters = EMPTY_FILTERS) {
  const { query, kategori, dari, sampai, hanyaDibuka } = filters;

  const events = useMemo(() => {
    const keyword = query.trim().toLowerCase();

    return eventsData
      .filter((event) => {
        if (kategori !== 'semua' && event.kategori !== kategori) return false;
        if (dari && event.tanggal < dari) return false;
        if (sampai && event.tanggal > sampai) return false;
        if (hanyaDibuka && getEventStatus(event).state !== 'dibuka') return false;
        if (keyword) {
          const haystack = `${event.judul} ${event.penyelenggara} ${event.lokasi} ${event.deskripsi}`.toLowerCase();
          if (!haystack.includes(keyword)) return false;
        }
        return true;
      })
      .sort(sortByDate);
  }, [query, kategori, dari, sampai, hanyaDibuka]);

  return { events, total: eventsData.length };
}

export function useEvent(id) {
  return useMemo(() => eventsData.find((event) => event.id === id) ?? null, [id]);
}

export function useEventsByIds(ids) {
  return useMemo(() => eventsData.filter((event) => ids.includes(event.id)).sort(sortByDate), [ids]);
}

export function getEventById(id) {
  return eventsData.find((event) => event.id === id) ?? null;
}
