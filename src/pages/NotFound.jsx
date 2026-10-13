import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import EmptyState from '../components/EmptyState';

export default function NotFound() {
  useDocumentTitle('Halaman tidak ditemukan');
  return (
    <EmptyState
      title="Halaman tidak ditemukan"
      action={
        <Link to="/" className="btn-primary">
          Kembali ke katalog
        </Link>
      }
    >
      Alamat yang kamu buka tidak ada di EventKu.
    </EmptyState>
  );
}
