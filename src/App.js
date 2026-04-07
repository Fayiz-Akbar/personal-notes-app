import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
import './styles/App.css'; // Pastikan path CSS ini benar

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/archives" element={<ArchivePage />} />
            <Route path="/notes/new" element={<AddPage />} />
            <Route path="/notes/:id" element={<DetailPage />} />
            <Route path="*" element={<NotFoundPage />} /> {/* Menangkap URL 404 */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;