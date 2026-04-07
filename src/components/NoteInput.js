import React from 'react';
import PropTypes from 'prop-types';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    // Inisialisasi state untuk form
    this.state = {
      title: '',
      body: '',
    };

    // Binding fungsi
    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyInputHandler = this.onBodyInputHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState({ title: event.target.value });
  }

  // Menggunakan innerHTML sesuai instruksi Dicoding untuk contentEditable
  onBodyInputHandler(event) {
    this.setState({ body: event.target.innerHTML });
  }

  onSubmitHandler(event) {
    event.preventDefault(); // Mencegah reload halaman
    this.props.addNote(this.state); // Mengirim data ke parent component
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitHandler}>
        <input
          type="text"
          className="note-input__title"
          placeholder="Judul catatan rahasiamu..."
          value={this.state.title}
          onChange={this.onTitleChangeHandler}
          required
        />
        {/* Menggunakan div dengan contentEditable sebagai ganti textarea */}
        <div
          className="note-input__body"
          data-placeholder="Sebenarnya saya adalah ...."
          contentEditable
          onInput={this.onBodyInputHandler}
        />
        <button type="submit" className="note-input__button">Simpan Catatan</button>
      </form>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;