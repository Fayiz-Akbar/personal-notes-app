import React from 'react';
import NoteList from '../components/NoteList';
import { getActiveNotes, deleteNote, archiveNote } from '../utils/local-data';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      notes: getActiveNotes(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.setState({ notes: getActiveNotes() });
  }

  onArchiveHandler(id) {
    archiveNote(id); // Memanggil fungsi bawaan Dicoding
    this.setState({ notes: getActiveNotes() });
  }

  render() {
    return (
      <section className="homepage">
        <h2>Catatan Aktif</h2>
        <NoteList 
          notes={this.state.notes} 
          onDelete={this.onDeleteHandler} 
          onArchive={this.onArchiveHandler} 
        />
      </section>
    );
  }
}

export default HomePage;