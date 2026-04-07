import React from 'react';
import { useNavigate } from 'react-router-dom';
import NoteInput from '../components/NoteInput';
import { addNote } from '../utils/local-data';

function AddPage() {
  const navigate = useNavigate();

  // Fungsi yang akan dipanggil ketika form disubmit
  function onAddNoteHandler(note) {
    addNote(note); // Menyimpan ke "database" lokal
    navigate('/'); // Kembali ke halaman utama (Home)
  }

  return (
    <section className="add-new-page">
      <h2>Tambah Catatan Baru</h2>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddPage;