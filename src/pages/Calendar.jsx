import { useDocumentTitle } from '../hooks/useDocumentTitle';
import CalendarContainer from '../containers/CalendarContainer';
import PageHeading from '../components/PageHeading';

export default function Calendar() {
  useDocumentTitle('Kalender event');
  return (
    <>
      <PageHeading title="Kalender event">Lihat jadwal event per bulan. Titik berwarna menunjukkan kategori event pada tanggal itu.</PageHeading>
      <CalendarContainer />
    </>
  );
}
