import { useEffect, useState } from 'react';

// Hooks Pattern: logika baca/tulis localStorage dipisah dari komponen.
// initialValue boleh berupa nilai biasa atau fungsi (dijalankan sekali saat dibutuhkan).
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const fallback = typeof initialValue === 'function' ? initialValue() : initialValue;
    try {
      const saved = window.localStorage.getItem(key);
      return saved !== null ? JSON.parse(saved) : fallback;
    } catch {
      return fallback;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // localStorage bisa penuh atau diblokir; aplikasi tetap jalan tanpa penyimpanan
    }
  }, [key, value]);

  return [value, setValue];
}
