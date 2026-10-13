import { useDocumentTitle } from '../hooks/useDocumentTitle';
import BookmarkListContainer from '../containers/BookmarkListContainer';
import PageHeading from '../components/PageHeading';

export default function Bookmarks() {
  useDocumentTitle('Event tersimpan');
  return (
    <>
      <PageHeading title="Event tersimpan">Daftar event yang kamu bookmark, diurutkan dari yang paling dekat.</PageHeading>
      <BookmarkListContainer />
    </>
  );
}
