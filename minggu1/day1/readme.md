## 2.
- Perbedaan JSX dengan HTML
- JSX ditulis di dalam JavaScript, bisa menyisipkan ekspresi {}.
- JSX pakai className bukan class.
- JSX harus punya satu parent element.
- JSX akan dikompilasi ke React.createElement.


##  Contoh Perbedaan HTML dan JSX

```html
contoh HTML:
<div class="box">
  <h1>Hello HTML</h1>
</div>


contoh JSX:
<div class="box">
  <h1>Hello JSX</h1>
  <p>{2 + 3}</p>
</div>
```

## 3.
Virtual DOM adalah representasi tiruan (virtual) dari DOM asli di browser.
DOM asli itu ibarat “panggung teater”, sedangkan Virtual DOM itu “catatan/sketsa panggung” yang disimpan di memori.
Cara Kerja Virtual DOM di React:

- Render Virtual DOM
Saat ada perubahan state atau props, React akan membuat Virtual DOM baru.

- Diffing
React membandingkan (diff) antara Virtual DOM yang lama dan yang baru → mencari bagian mana saja yang berubah.

- Reconciliation
Hanya bagian yang berubah itu saja yang diperbarui ke DOM asli.
Jadi, tidak semua halaman di-reload, hanya bagian kecil yang memang berubah.

## 4.
## PERBEDAAN SPA DAN MPA
1. Single Page Application (SPA)

- Definisi: Aplikasi web yang memuat satu halaman HTML utama.
Semua interaksi pengguna (navigasi, update data) dilakukan dengan JavaScript tanpa reload halaman penuh.

- Contoh: Gmail, Facebook, Trello.

## Kelebihan:

- Pengalaman pengguna lebih cepat & mulus → tidak ada reload halaman penuh.

- Interaktif → cocok untuk aplikasi yang sering butuh update data secara real-time.

## Kekurangan:

- SEO kurang optimal (meski sekarang bisa diatasi dengan SSR/Next.js).

- Waktu load awal lebih lama karena harus download banyak JavaScript di awal.

2. Multi-Page Application (MPA)

- Definisi: Aplikasi web yang terdiri dari banyak halaman HTML.
Setiap kali pindah halaman, browser melakukan request baru ke server dan reload halaman penuh.

- Contoh: Website berita, e-commerce tradisional, blog biasa.

## Kelebihan:

- SEO lebih bagus karena tiap halaman punya URL dan konten HTML tersendiri.

- Lebih aman & stabil → cocok untuk aplikasi besar berbasis server (misalnya sistem manajemen data).

## Kekurangan:

- Navigasi lebih lambat karena setiap klik butuh reload halaman dari server.

- Pengalaman pengguna kurang interaktif dibanding SPA.

## screnshoot:


![alt text](<Screenshot 2025-10-01 204754.png>)