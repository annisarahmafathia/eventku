import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useBookmarks() {
  const [ids, setIds] = useLocalStorage('eventku:bookmarks', []);

  const isBookmarked = useCallback((eventId) => ids.includes(eventId), [ids]);

  const toggleBookmark = useCallback(
    (eventId) => {
      setIds((prev) => (prev.includes(eventId) ? prev.filter((id) => id !== eventId) : [...prev, eventId]));
    },
    [setIds],
  );

  return { bookmarkIds: ids, isBookmarked, toggleBookmark };
}
