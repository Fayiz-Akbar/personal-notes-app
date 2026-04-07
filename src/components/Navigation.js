import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <header className="note-app__header">
      <h1><Link to="/">Aplikasi Catatan</Link></h1>
      <nav className="navigation">
        <ul>
          <li><Link to="/archives">Arsip</Link></li>
          <li><Link to="/notes/new" className="button-add">+ Tambah</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;