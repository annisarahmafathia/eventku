import { useDocumentTitle } from '../hooks/useDocumentTitle';
import EventListContainer from '../containers/EventListContainer';
import PageHeading from '../components/PageHeading';

export default function Home() {
  useDocumentTitle('');
  return (
    <>
      <PageHeading title="Temukan event USK berikutnya">
        Lomba, seminar, workshop, dan open recruitment panitia dari fakultas dan organisasi mahasiswa di Universitas Syiah Kuala, dikumpulkan di satu tempat supaya tidak ada info yang terlewat.
      </PageHeading>
      <EventListContainer />
    </>
  );
}
