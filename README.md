# EventKu USK

Aplikasi web untuk menemukan lomba, seminar, workshop, dan open recruitment kepanitiaan di Universitas Syiah Kuala (USK), Banda Aceh, lengkap dengan bookmark, kalender, link pendaftaran ke penyelenggara, dan penanda event yang sudah didaftar.

Proyek UTS Praktikum POPL A.

## Tim

| Nama | NIM | Peran utama |
|---|---|---|
| (Annisa Rahma Fathia) | (2408107010027) | (katalog, filter, dan pencarian) |
| (Putroe Fatimah Azzahra) | (2408107010002) | (detail event, pendaftaran, bookmark) |
| (Fayla Syifa Rustam) | (2408107010029) | (kalender, Docker, dokumentasi) |

## Docker Hub

Link repository publik: **https://hub.docker.com/r/faelynss/eventku** 

Image yang dikumpulkan: `faelynss/eventku:v1-UTS`

## Latar belakang, tujuan, dan manfaat

**Latar belakang.** Informasi lomba, seminar, workshop, dan rekrutmen panitia di lingkungan USK tersebar di banyak grup chat, akun media sosial fakultas, dan organisasi mahasiswa. Mahasiswa sering melewatkan event karena informasinya tenggelam atau baru diketahui setelah pendaftaran ditutup.

**Tujuan.** Menyediakan satu katalog event USK yang bisa dicari, difilter, disimpan, dilihat di kalender, dan didaftar dalam satu aplikasi.

**Manfaat.** Mahasiswa menghemat waktu mencari informasi, tidak ketinggalan batas pendaftaran, dan bisa merencanakan kegiatan lebih rapi.

**Target pengguna.** Mahasiswa aktif USK yang ingin mengikuti lomba, seminar, workshop, atau kepanitiaan.

> Cakupan EventKu hanya event yang diselenggarakan di lingkungan USK (fakultas, jurusan, UKM, himpunan, dan BEM). EventKu berfokus pada penemuan dan pendaftaran event, bukan pada pengelolaan program kerja internal organisasi.

## Fitur utama

1. **Katalog event** dengan pencarian, filter kategori (lomba, seminar, workshop, kepanitiaan), filter rentang tanggal, dan filter "pendaftaran masih dibuka".
2. **Detail event**: tanggal, waktu, lokasi, penyelenggara, biaya, batas pendaftaran, dan sisa kuota.
3. **Link pendaftaran**: tombol "Daftar di situs penyelenggara" membuka form resmi penyelenggara (misalnya Google Form) di tab baru. Tombol dinonaktifkan jika pendaftaran ditutup, kuota penuh, atau event sudah selesai.
4. **Bookmark**: simpan event favorit dan lihat di halaman Tersimpan.
5. **Kalender event**: tampilan bulanan, klik tanggal untuk melihat event pada hari itu.
6. **Pendaftaran saya**: tombol "Tandai sudah daftar" mencatat event yang sudah didaftar, dan semuanya terkumpul di halaman Pendaftaran. Penanda ini hanya catatan pribadi di browser, bukan pendaftaran resmi.
7. **Mode gelap** yang mengikuti preferensi sistem dan bisa diganti manual.

Data event berasal dari `src/data/events.json` (data contoh, termasuk field `linkDaftar` yang berisi link contoh `example.com`; ganti dengan link asli jika dipakai sungguhan). Bookmark, penanda pendaftaran, dan tema disimpan di `localStorage` browser.

## Teknologi

- React 18 (JavaScript) dengan Vite
- React Router 6
- Tailwind CSS 3
- Docker + Nginx untuk deployment

## Struktur folder

```
src/
├── components/   komponen presentasi (EventCard, FilterBar, CalendarView, dll.)
├── containers/   komponen yang mengelola state dan data
├── context/      Provider untuk bookmark, pendaftaran, dan tema
├── hooks/        custom hooks (useEvents, useBookmarks, useCalendar, dll.)
├── pages/        halaman yang dipetakan ke route
├── data/         events.json
├── utils/        fungsi bantu (tanggal, format, status event)
├── App.jsx
└── main.jsx
```

## Design pattern yang digunakan

### 1. Hooks Pattern

Logika dipisah dari tampilan ke dalam custom hook. Contoh `src/hooks/useEvents.js`: komponen cukup memberi filter, hook mengembalikan daftar event yang sudah difilter dan diurutkan.

```js
export function useEvents(filters = EMPTY_FILTERS) {
  const events = useMemo(() => eventsData.filter(/* kategori, tanggal, kata kunci */).sort(sortByDate), [/* ... */]);
  return { events, total: eventsData.length };
}
```

Hook lain: `useBookmarks`, `useRegistrations`, `useCalendar`, `useLocalStorage`, `useTheme`.

### 2. Container-Presenter Pattern

Container mengelola state dan data, presenter hanya menampilkan lewat props. Contoh: `EventListContainer` menyimpan state filter dan memanggil `useEvents`, lalu merender `FilterBar` dan `EventGrid` (presenter).

```jsx
// containers/EventListContainer.jsx
const [filters, setFilters] = useState(EMPTY_FILTERS);
const { events, total } = useEvents(filters);
return (
  <>
    <FilterBar filters={filters} onChange={updateFilters} onReset={resetFilters} />
    <EventGrid events={events} />
  </>
);
```

Pasangan lain: `CalendarContainer` dan `CalendarView`, `EventDetailContainer` dan `EventDetailView`, `RegistrationListContainer` dan `EventGrid`.

### 3. Context/Provider Pattern

Status bookmark, pendaftaran, dan tema dibagikan ke semua halaman lewat Provider sehingga konsisten (misalnya jumlah bookmark di navbar ikut berubah saat kartu di katalog di-bookmark).

```jsx
// main.jsx
<ThemeProvider>
  <BookmarkProvider>
    <RegistrationProvider>
      <App />
    </RegistrationProvider>
  </BookmarkProvider>
</ThemeProvider>
```

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:5173.

## Docker

Dockerfile memakai multi-stage build: tahap pertama (Node 20 Alpine) menginstal dependency dan membangun aplikasi, tahap kedua (Nginx Alpine) hanya menyajikan hasil build sehingga image akhir kecil. File `nginx.conf` memakai `try_files $uri /index.html` agar refresh di halaman selain beranda tidak menghasilkan 404.

```bash
# build dan beri tag (wajib berakhiran -UTS)
docker build -t USERNAME/eventku:v1-UTS .

# tes lokal
docker run --rm -p 8080:80 USERNAME/eventku:v1-UTS
# buka http://localhost:8080

# push ke repository publik Docker Hub
docker login
docker push USERNAME/eventku:v1-UTS
```

## Aturan Git

**Branch**
- Fitur baru: `feat_{nama_fitur}/{dd-mm-yyyy}`, contoh `feat_katalog-event/20-10-2026`
- Perbaikan bug: `fix_{nama_fitur}/{dd-mm-yyyy}`

**Commit message**
- `feat:` penambahan atau peningkatan fitur
- `fix:` perbaikan bug
- `style:` perubahan tampilan UI
- `chore:` perubahan non-fungsional (config, dokumentasi, dll.)

## Rencana pengembangan

- Halaman admin dan backend (Node.js + Express) dengan database agar penyelenggara bisa menambah, mengubah, dan menghapus event sendiri
- Penyelenggara dapat mengunggah poster dan memasang link pendaftaran langsung dari EventKu
- Login mahasiswa dan penyelenggara
- Pengingat deadline lewat email atau notifikasi
- Ekspor event ke Google Calendar
- Peningkatan UI/UX berdasarkan masukan pengguna
- Deployment penuh di GCP dengan Docker
