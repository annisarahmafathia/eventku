import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import EventDetail from './pages/EventDetail';
import Bookmarks from './pages/Bookmarks';
import Registrations from './pages/Registrations';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="event/:id" element={<EventDetail />} />
        <Route path="tersimpan" element={<Bookmarks />} />
        <Route path="pendaftaran" element={<Registrations />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
