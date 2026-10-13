import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#konten" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-30 focus:rounded-lg focus:bg-brand focus:px-3 focus:py-2 focus:text-brand-ink">
        Lewati ke konten
      </a>
      <Navbar />
      <main id="konten" className="mx-auto w-full max-w-6xl flex-1 px-4 pt-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
