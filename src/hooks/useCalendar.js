import { useMemo, useState } from 'react';
import { startOfToday, toISODate } from '../utils/date';

// Hooks Pattern: navigasi bulan dan perhitungan grid kalender (Senin sebagai awal minggu).
export function useCalendar() {
  const today = startOfToday();
  const [cursor, setCursor] = useState({ year: today.getFullYear(), month: today.getMonth() });

  const cells = useMemo(() => {
    const { year, month } = cursor;
    const firstDay = new Date(year, month, 1);
    const offset = (firstDay.getDay() + 6) % 7; // 0 = Senin
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const list = [];

    for (let i = 0; i < offset; i += 1) list.push(null);
    for (let day = 1; day <= daysInMonth; day += 1) {
      const date = new Date(year, month, day);
      list.push({ day, iso: toISODate(date) });
    }
    while (list.length % 7 !== 0) list.push(null);
    return list;
  }, [cursor]);

  const goPrev = () =>
    setCursor(({ year, month }) => (month === 0 ? { year: year - 1, month: 11 } : { year, month: month - 1 }));
  const goNext = () =>
    setCursor(({ year, month }) => (month === 11 ? { year: year + 1, month: 0 } : { year, month: month + 1 }));
  const goToday = () => setCursor({ year: today.getFullYear(), month: today.getMonth() });

  return { ...cursor, cells, todayISO: toISODate(today), goPrev, goNext, goToday };
}
