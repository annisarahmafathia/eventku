import { useThemeContext } from '../context/ThemeContext';
import { MoonIcon, SunIcon } from './Icons';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Ganti ke tema terang' : 'Ganti ke tema gelap'}
      className="rounded-lg border border-line bg-surface p-2 text-ink hover:border-brand"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
