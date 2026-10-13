import { Link, NavLink } from 'react-router-dom';
import { useBookmarkContext } from '../context/BookmarkContext';
import { useRegistrationContext } from '../context/RegistrationContext';
import ThemeToggle from './ThemeToggle';

const linkClass = ({ isActive }) =>
  `whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-semibold transition-colors ${
    isActive ? 'bg-brand text-brand-ink' : 'text-ink hover:bg-line/60'
  }`;

export default function Navbar() {
  const { bookmarkIds } = useBookmarkContext();
  const { registeredIds } = useRegistrationContext();

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3">
        <Link to="/" className="font-display text-2xl font-extrabold tracking-tight text-brand">
          EventKu
          <span className="ml-1.5 align-middle text-sm font-semibold text-muted">USK</span>
        </Link>

        <nav aria-label="Navigasi utama" className="order-3 -mx-1 flex w-full gap-1 overflow-x-auto sm:order-none sm:w-auto sm:overflow-visible">
          <NavLink to="/" end className={linkClass}>
            Katalog
          </NavLink>
          <NavLink to="/kalender" className={linkClass}>
            Kalender
          </NavLink>
          <NavLink to="/tersimpan" className={linkClass}>
            Tersimpan{bookmarkIds.length > 0 ? ` (${bookmarkIds.length})` : ''}
          </NavLink>
          <NavLink to="/pendaftaran" className={linkClass}>
            Pendaftaran{registeredIds.length > 0 ? ` (${registeredIds.length})` : ''}
          </NavLink>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
