import { defineAppConfig } from 'nuxt/app';

// app.config.ts
export default defineAppConfig({
  // Pindahkan konfigurasi repositori ke root object 'github' ini
  github: {
    owner: 'gettako', // Username/Organisasi GitHub
    repo: 'docs', // Nama repositori dokumen Anda
    branch: 'main', // Branch utama (misal: 'main' atau 'master')
    rootDir: '', // Kosongkan jika markdown langsung ditaruh di root repo gettako/docs
    edit: true, // Pastikan fitur edit bernilai true
  },

  docus: {
    title: 'Gettako Docs',
    description: 'Dokumentasi resmi Gettako.',

    // Properti theme di dalam docus sekarang fokus ke tampilan saja
    theme: {
      edit: false,
    },
  },
});
