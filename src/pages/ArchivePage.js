import React from 'react';
import NoteList from '../components/NoteList';
import { getArchivedNotes, deleteNote, unarchiveNote } from '../utils/local-data';

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      notes: getArchivedNotes(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.setState({ notes: getArchivedNotes() });
  }

  onUnarchiveHandler(id) {
    unarchiveNote(id); // Mengembalikan catatan ke halaman aktif
    this.setState({ notes: getArchivedNotes() });
  }

  render() {
    return (
      <section className="archives-page">
        <h2>Catatan Arsip</h2>
        {/* Pengecekan khusus jika arsip kosong sesuai Kriteria Opsional 1 */}
        {this.state.notes.length === 0 ? (
           <p className="notes-list__empty-message">Arsip kosong</p>
        ) : (
          <NoteList 
            notes={this.state.notes} 
            onDelete={this.onDeleteHandler} 
            onArchive={this.onUnarchiveHandler} 
          />
        )}
      </section>
    );
  }
}

export default ArchivePage;