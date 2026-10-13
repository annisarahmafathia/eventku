import { createContext, useContext } from 'react';
import { useBookmarks } from '../hooks/useBookmarks';

// Context/Provider Pattern: status bookmark konsisten di semua halaman.
const BookmarkContext = createContext(null);

export function BookmarkProvider({ children }) {
  const bookmarks = useBookmarks();
  return <BookmarkContext.Provider value={bookmarks}>{children}</BookmarkContext.Provider>;
}

export function useBookmarkContext() {
  const ctx = useContext(BookmarkContext);
  if (!ctx) throw new Error('useBookmarkContext harus dipakai di dalam BookmarkProvider');
  return ctx;
}
