import React from 'react';
import NoteList from '../components/NoteList';
import { getActiveNotes } from '../utils/local-data';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    
    // Inisialisasi state dengan data catatan aktif dari utils
    this.state = {
      notes: getActiveNotes(),
    };
  }

  render() {
    return (
      <section className="homepage">
        <h2>Catatan Aktif</h2>
        {/* Mengirimkan state notes sebagai props ke NoteList */}
        <NoteList notes={this.state.notes} />
      </section>
    );
  }
}

export default HomePage;