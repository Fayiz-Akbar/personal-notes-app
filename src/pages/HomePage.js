import React from 'react';
import NoteList from '../components/NoteList';
import { getActiveNotes, deleteNote } from '../utils/local-data';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      notes: getActiveNotes(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.setState({
      notes: getActiveNotes(),
    });
  }

  render() {
    return (
      <section className="homepage">
        <h2>Catatan Aktif</h2>
        {/* Pastikan baris di bawah ini persis seperti ini */}
        <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
      </section>
    );
  }
}

export default HomePage;