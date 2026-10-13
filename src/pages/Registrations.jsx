import { useDocumentTitle } from '../hooks/useDocumentTitle';
import RegistrationListContainer from '../containers/RegistrationListContainer';
import PageHeading from '../components/PageHeading';

export default function Registrations() {
  useDocumentTitle('Pendaftaran saya');
  return (
    <>
      <PageHeading title="Pendaftaran saya">Event yang sudah kamu daftar di situs penyelenggara dan kamu tandai di EventKu. Buka event untuk mencabut tanda.</PageHeading>
      <RegistrationListContainer />
    </>
  );
}
