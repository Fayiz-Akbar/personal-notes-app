import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { showFormattedDate } from '../utils/local-data';

function NoteItem({ id, title, createdAt, body }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">
          {/* Link ini mengarah ke halaman detail sesuai ID catatan */}
          <Link to={`/notes/${id}`}>{title}</Link>
        </h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <div className="note-item__body">{parser(body)}</div>
      </div>
    </div>
  );
}

// Validasi PropTypes (Wajib untuk Bintang 5!)
NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItem;